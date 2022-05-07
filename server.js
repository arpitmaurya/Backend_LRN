let express = require('express')
let mongoose = require('mongoose')
let app = express()

app.listen(3000, () => {
 console.log('listening')
})

// Imp Line To Write
app.use(express.json())

// Mini App
let todoRouter = express.Router()
let todoHome = express.Router()

app.use('/', todoRouter)

todoRouter.route('/')
  .get((req, res) => {
  res.redirect('/todoHome');
 })

app.use('/todoHome', todoHome);
todoHome.route('/')
  .get(todoHomeFile)
  .post(todoPost)

 // Connect MongoDb
 let url =
  'mongodb://arpit:arpit@cluster0-shard-00-00.con4f.mongodb.net:27017,cluster0-shard-00-01.con4f.mongodb.net:27017,cluster0-shard-00-02.con4f.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-vtr0rf-shard-0&authSource=admin&retryWrites=true&w=majority';
   
mongoose.connect(url)
 .then(() => {
   console.log('DB_Connected');
 })
 .catch((err) => {
  // console.log(err)
 })

let taskSchema = mongoose.Schema({
  todo: {
    type: String,
    reuired:true,
  },
  fav: {
    type: Boolean,
    required:true
  },
 
 })


let taskData = mongoose.model('taskData', taskSchema);

async function todoPost(req, res) {
  let taskDefine = req.body
  if (taskDefine.task == 'create') {
    let dbTaskData = await taskData.create(taskDefine);
    let alldata = await taskData.find();
    res.json(alldata);
  } else if (taskDefine.task == 'fav') {
    
    let dbFavUpdate = await taskData.findOneAndUpdate(
      { _id: taskDefine._id },
      { fav: taskDefine.fav }
    );
     let alldata = await taskData.find();
     res.json(alldata);
  } else if (taskDefine.task == 'delete') {
    let dbFavUpdate = await taskData.findOneAndDelete({ _id: taskDefine._id });
    let alldata = await taskData.find();
    res.json(alldata);
  } else if (taskDefine.task == 'search') {
    let data =taskDefine.value
    let alldata = await taskData.find({ todo: data });
    console.log(alldata)
        res.json(alldata);
  }
 }
function todoHomeFile(req, res) {
  res.sendFile('./public/todoHome.html',{root:__dirname})
}
