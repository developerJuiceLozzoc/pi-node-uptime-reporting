const express = require("express")
const bp = require('body-parser');
const app = express()

app.use(bp.json())

app.post('/analytics/uptime',function(req,res){
  console.log(req.body);
  res.end()
})
app.get('/analytics/hithere',function(req,res){
  res.status(200).send("Greetings from Cloud!")
})


app.listen(PORT, function(err){
  if(err){
    console.log(`The uptime analytics container server was unable to run`,err);
  }
  else {
    console.log(`
============
listening on port ${PORT}
============`);
  }
})
