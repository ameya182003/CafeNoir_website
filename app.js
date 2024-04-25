const express = require("express")
const cors = require("cors")
const app = express()
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://ameya000:ameya000@ameya.1ynyseo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';
const db = client.db(dbName);
const collection = db.collection('documents');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/blog",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/registration",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3001,()=>{
    console.log("port connected");
})

