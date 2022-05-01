let express = require('express');
let app = express()
app.listen(3000)

let obj = {}
app.use(express.json())
app.get('/home', (req, res) => {
 res.send('<h1>Hi Arpit<h1/>')
})

app.get('/user', (req, res) => {
 console.log(req.query.name)
 res.send(obj)
})

// to Send Data
app.post('/user', (req, res) => {
 obj =req.body
 res.json({
  message: 'Done',
 data:req.body})
})

// To update data
app.patch('/user', (req, res) => {
 let updateData = req.body
 for (key in updateData) {
  obj[key] = updateData[key]
 }
 res.send({
  "done":"update"
 })
})

app.delete('/user', (req, res) => {
 obj = {}
 
 res.send({'done':'delete'})
})

app.get('/user/:id', (req, res) => {
 console.log(req.params.id);
 res.send({ done: 'delete' });
})