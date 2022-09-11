const express=require("express");
const { blog_index, blog_create_get, blog_create_post, blog_detailes, blog_delete  }=require("../controllers/blogControllers");

const router=express.Router();

router.get("/",blog_index);
router.post("/",blog_create_post);
router.get("/create",blog_create_get);
router.get("/:id",blog_detailes);
router.delete("/:id",blog_delete);


module.exports=router;