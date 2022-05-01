let express = require('express');
let app = express();
app.listen(3000);

let obj = {};
app.use(express.json());

// lets Create Mini App 
let userRouter = express.Router()

app.use('/user', userRouter);
userRouter
 .route('/')
 .get(getUser)
 .post(postUser)
 .patch(updateuser)
 .delete(deleteuser)

userRouter
 .route('/:id')
 .get(userId)


function userId (req, res){
  console.log(req.params.id);
  res.send({ done: 'params' });
}

function updateuser(req, res){
  let updateData = req.body;
  for (key in updateData) {
    obj[key] = updateData[key];
  }
  res.send({
    done: 'update',
  });
}

function getUser(req, res){
  console.log(req.query.name);
  res.send(obj);
}

function deleteuser (req, res){
  obj = {};
  res.send({ done: 'delete' });
}

function postUser(req, res){
  obj = req.body;
  res.json({
    message: 'Done',
    data: req.body,
  });
}