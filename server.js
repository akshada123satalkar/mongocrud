//import all modules
//express body-parser cors
let express=require('express')
let bodyparser=require('body-parser')
let cors=require('cors')
//create rest obj
let app=express()
//create port number
let port=process.env.PORT || 8080
//set json as mime type
app.use(bodyparser.json())
//client not sending data =>encoding
app.use(bodyparser.urlencoded({extended:false}))
//enable cors:communicaion among various ports=>cros origin resource sharing
app.use(cors())
//import fetch insert update delete module
let fetch=require('./fetch/fetch')
let insert=require('./insert/insert')
let update=require('./update/update')
let remov=require('./delete/delete')
//use above module
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)
//assign port number
//app.listen(8080)
app.listen(port,()=>{
    console.log("server listen port number 8080",port)
})


//start server
//>node server
// url:
// http://localhost:8080/fetch    GET
// http://localhost:8080/insert    POST
// http://localhost:8080/update    POST
// http://localhost:8080/delete    POST

//>body->row->json