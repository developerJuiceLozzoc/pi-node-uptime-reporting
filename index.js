const NODE_NAME = process.env.NODE_NAME

if(NODE_NAME == 'node'){
  require('./client')
}
else{
  require('./server')
}
