//import modules
const express=require('express')
let mongodb=require('mongodb')
//import url
let url=require('../url')
//create mongoclient
let mcl=mongodb.MongoClient
//create router instance
let router=express.Router()
//create rest api
router.get("/",(req,res)=>{
    //connect to mngodb
    mcl.connect(url,(err,conn)=>{
        if(err)
        
            console.log('error in connection',err)
        else
        {
            let db=conn.db('nodedb')
            db.collection('products').find().toArray((err,array)=>{
                if(err)
                  console.log('error while fetching data')
                else
                  {
                    console.log('data send')
                    res.json(array)
                  }
            })
        }
        

    })
})
//export router
module.exports=router