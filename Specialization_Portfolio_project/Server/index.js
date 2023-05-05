const express = require('express')
const cors = require('cors')
const app =  express();
const mongo = require('mongoose');
const Contact = require('./Model/Contact');
app.use(cors());
app.use(express.json());
mongo.connect('mongodb://0.0.0.0:27017/AzyEvents',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err.message);
})

app.listen('3002',() => {
    console.log("server Started listenning on port 3002");
});

app.get("/", (req, res)=>{
    res.send("PPPP");
})

app.post("/api/contact", (req, res) => {
    const {firstName, lastName, email, phone, eventType, additionalNotes} = req.body;
    if (firstName && lastName && email && phone && eventType)
    {
        const data = Contact.create({
            firstName, lastName, email, phone, eventType, additionalNotes,
        });
    
        if (data) 
            return res.json({msg: "Thank you! we will Contact you Soon!"})
        return res.json({msg: "Faild to Summit!"})
    }
    return res.json({msg:"Some required field is missed"});
});

