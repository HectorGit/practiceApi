var express = require('express');
var app = express();
const bodyParser = require('body-parser')//not sure what this is for but definitely needed.
var port =  process.env.PORT || 5001;

app.use("/", require("./routes/get"));
app.use("/", require("./routes/post"));
app.use("/", require("./routes/patch"));
app.use("/", require("./routes/delete"));

app.listen(port);

console.log('my practice API started on : ' + port)