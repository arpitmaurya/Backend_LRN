// Http ,fs dalna hota hn
const http = require('http')
let fs = require('fs')
let _ = require('lodash')

// Request and Response 
// Object -> Request -> Meta Data = type of request,
// kidhar se ayea reuest,konsa Data,host (browser se data ata hn)
// Response yehi object ka use kr k (data browser kodenge)

 // jab jab url hit hoga - tab tab ye code chalega 'http.createServer()' \
 // -  for eg localhost:3000/

let server = http.createServer((req, res) => {
  console.log(_.random(1, 20))
  console.log("request has been made from broser to server")
 
let abc = _.once(()=>{
  console.log('hi')
  })

  abc()
  abc()
 // konsa data send kr rahe hn uska type likh na hota hn
 res.setHeader('Content-Type', 'text/html')

 // res.write is use to send data as response 
 // res.write('Hi Arpit')-> res.setHeader('Content-Type','text/plain')
 // res.write('<h1>Hi RACK</h1>'-> 'text/html');
 
 //  we can also write in res.end(what we want to send) if their is only one
  // single thing to send
 //  res.end("<h1>Hi am Arpit</h1>") same as res.write('<h1>Hi am Arpit</h1>')

// Now we will use Whole Html File
 // we will use fs.readFile

 // Now we set Path (we doesnt want ,if user type any or give any url stuff
 // after localhost:3000/ it should not render same page again instead it will
 // show 404 or respected site)
 
 let path = './views'

 // Why we have used brake over here - if any of one condition become true its 
 // run that part and move to next switch condition we doesnt want this if we
 // get the perfect ans just break (come out of switch constion)
 
  
 switch (req.url) {
   case '/':
     path += '/home.html';
     res.statusCode = 200;
     break;
   case '/about':
     path += '/about.html';
     res.statusCode = 200;
     break;
   case '/about-me':
     res.statusCode = 301;
     res.setHeader('Location', '/about')
     res.end()
     
     break;
   case '/contact':
     path += '/contact.html';
     res.statusCode = 200;
     break;
   default:
     path += '/404.html';
     res.statusCode = 404;
     break;
 }
 fs.readFile(path, (err,fileData) => {
  if (err) {
   console.log(err)
  } else {
   // res.write(fileData)
   res.end(fileData) 
   // end meand kaam hogayea data send kr k (we  can aslo use as sender is 
   // data is single for multiple use res.write as much want)
  }
 })
})

// portNumber, Host (for eg Localhost)(kidhar se ayea hn), callBack Fn
server.listen(3000, 'localhost', () => {
 console.log('server is listening on 3000')
})