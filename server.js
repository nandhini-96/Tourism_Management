const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/promodel')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes

app.get('/',(req,res)=>{
res.send('hello blog ')
})
app.get('/student', async(req,res)=>{
  try{
   const student = await Product.find({})
   res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({errorMessage: error.message});
    }

   })
   app.get('/student/:id', async(req,res)=>{
    try{
        const {id} = req.params;
     const student = await Product.findById(id)
     res.status(400).json({student});
    }
     catch(error){
     res.status(500).json({errorMessage: error.message});
      }
  
     })
app.post('/student', async (req, res)=>{
    try{
        console.log(req.body)
        const student =  await Product.create(req.body)
       res.status(201).json(student);
    }
    catch(error){
    console.log(error.message);
    //res.send(req.body)
   res.status(500).json({message:error.message})
   }
})
//update
app.put('/student/:id', async (req,res)=>{
   try{
       const {id}= req.params;
       const product =  await Product.findByIdAndUpdate(id,req.body);
        //if we cant find any id in database
        if(!product){
     res.status(404).json({message:'cant find any id ${id}'})
       }
       const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct);
    }
    catch(error){
   console.log(error.message)
    res.status(500).json({'message':error.message})
    }
    })

mongoose.
connect('mongodb+srv://nandhini:nandhu1925@cluster0.k9mf8xi.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {
    console.log('connected mongodb')
    app.listen(6498, ()=> {
    console.log('Node API app is running on port 6498')
}); 
}).catch((error) =>{
    console.log(error.message)
})