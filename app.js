const morgan=require("morgan");
const express=require("express");
const mongoose=require("mongoose");
const blogRoutes=require("./routes/blogRoutes");
require('dotenv').config()
const app=express();

const dbURI=`mongodb+srv://ahmad:${process.env.DB_PASSWORD}@blog.ppg2upz.mongodb.net/ahmad-blogs?retryWrites=true&w=majority`;
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(process.env.PORT || 3000))
    .catch((err)=>console.log(err));

// register view engine

app.set("view engine","ejs");


app.use(express.static('public'));
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.redirect("/blogs");
});

app.get("/about",(req,res)=>{
    res.render("about",{title:"About"});
});

app.use("/blogs",blogRoutes)

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"});
});