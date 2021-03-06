import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//tell express which routes it should handle. Any references to the route should be handled by the function//
app
.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else{
    open('http://localhost:' + port);
  }
});
