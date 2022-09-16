const express=require("express");
const { blog_index, blog_create_get, blog_create_post, blog_detailes, blog_delete  }=require("../controllers/blogControllers");

const router=express.Router();

router.route("/")
    .get(blog_index)
    .post(blog_create_post);

router.get("/create",blog_create_get);

router.route("/:id")
    .get(blog_detailes)
    .delete(blog_delete);

module.exports=router;