const Blog=require("../models/blog");

function blog_index(req,res){
    Blog.find()
        .sort({createdAt:-1})
        .then(result=>res.render("index",{title:"Home",blogs:result}))
        .catch(err=>console.log(err));
}

function blog_create_get(req,res){
    res.render("create",{title:"Create a new Blog"});
}

function blog_create_post(req,res){
    const {title,snippet,body}=req.body;
    const blog=new Blog({
        title,
        snippet,
        body
    });
    blog.save()
        .then(result=>res.redirect("/blogs"))
        .catch(err=>console.log(err));
}

function blog_detailes(req,res){
    const {id}=req.params;
    Blog.findById(id)
        .then(result=>{
            res.render("details",{blog:result,title:"Blog Details"});
        }).catch(()=>res.redirect("/404"));
}

function blog_delete(req,res){
    const {id}=req.params;
    Blog.findByIdAndDelete(id)
        .then(()=>res.json({redirect:"/blogs"}))
        .catch(err=>console.log(err));
}

module.exports={
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_detailes,
    blog_delete
};