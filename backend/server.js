var express = require('express')
var app = express();

var messages = [{ text: 'some text', owner: 'Time' }, { text: 'text', owner: 'Day' }];

app.get('/', (req, res) => {
    res.send('hello');
})
app.listen(1234);
