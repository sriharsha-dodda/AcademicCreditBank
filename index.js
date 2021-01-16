const dotenv=require("dotenv");
const express=require("express");
const path=require("path");
const app=express();
// Body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const User=require("./models/Users");
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');
connectDB();

app.get("/",(req,res)=>{
    res.send("hello there");
});

app.get('/api/users',async (req,res)=>{
    const result = await User.find();
    res.json(result);
})

app.get('/api/users', async (req, res, next) => {
    console.log(req.body)
    const newUser = {
        fullName: req.body.fullName,
        organizationName: req.body.organizationName,
        employeeId: req.body.employeeId,
        mobileNumber: req.body.mobileNumber,
        emailId: req.body.emailId,
        
    }

    try {
        let user = await User.create(newUser);
        res.json(user)
    } catch (err) {
        console.error(err);
    }
});
app.get("*",(req,res)=>{res.send("star")});
const PORT=process.env.PORT||3000;
app.listen(PORT, console.log("server running"));