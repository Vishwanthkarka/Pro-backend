const express = require("express")
const home = require("./router/login")
const app = express();

app.use('/api/v1',home)
app.get('/',(req,res)=>{
    res.send("This is home page");
})


app.get('/home',(req,res)=>{
    res.status(200).json({"name":"Vishwanath","age":45,"Education":"Btech"})
})

app.get('/error',(req,res)=>{
    res.status(400).json({"wrong":"password"})
})
app.get('/name/:id',(req,res)=>{
    const id = req.params
    const user = req.params.id
    res.status(200).json({"id-user":id,"user":user})

    // {
    //     "id-user": {
    //         "id": "vishwa"
    //     },
    //     "user": "vishwa"
    // }
})



app.listen(6000,()=>{
    console.log("server is running in 6000")
})