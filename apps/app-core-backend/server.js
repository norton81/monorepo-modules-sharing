console.log('start');
var cors = require('cors')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(bodyParser());
app.use(cors());

var store = {
  employees: [
    {id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a', firstName: "Client First Name 1", secondName: "Client Second Name 1"},
    {id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1', firstName: "Client First Name 2", secondName: "Client Second Name 2"},
    {id: '110ec58a-a0f2-4ac4-8393-c866d813b8d2', firstName: "Client First Name 3", secondName: "Client Second Name 3"}],
  current: {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a', firstName: "Client First Name 1", secondName: "Client Second Name 1"},
}
app.get('/employees', (req, res) => {
  res.send(store);
});

app.put('/employees', (req, res) => {
  const model = req.body;
  if(model.current?.id) {
    model.employees.forEach(element => {
      if(element.id === model.current.id) {
        element.firstName = model.current.firstName;
        element.secondName = model.current.secondName;
      }
    });
  } else if (model.current != null) {
    model.current.id = uuid.v4();
    model.employees.push(model.current);
  }
  store = model;
  res.send(store);
});

app.listen(12345);
