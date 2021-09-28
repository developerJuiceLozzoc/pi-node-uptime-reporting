const axios = require("axios");

const ARCHAEIC_URL = process.env.SERVER_URL;
const PORT = process.env.SERVER_PORT
const AUTH_TOKEN = 'bearer'
const cron = require("node-cron")
const {foobar} = require("../helpers")
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

console.log("NODE SPINNING UP");



cron.schedule('*/1 * * * *', function(){
  console.log("FIRING ANALYTICS");
  axios({
    method: 'post',
    url: `http://${ARCHAEIC_URL}:${PORT}/analytics/uptime`,
    data: {
      ip: {...foobar("http","0.0.0.0",PORT)},
      'process-uptime': process.uptime(),
      'os-uptime': require('os').uptime(),
    }}
  )
  .then(function(){

  })
  .catch(function(e){
    console.log(PORT,ARCHAEIC_URL);
    console.log(e.code);
  })
});
