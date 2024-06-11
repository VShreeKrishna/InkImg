import mongoose from "mongoose";

const PostSchema  = new mongoose.Schema({
    name:{
        type:String,
        reqiured:true,
    },
    prompt:{
        type:String,
        reqiured:true,
    },
    photo:{
        type:String,
        reqiured:true,
    },
});

const Post =mongoose.model("Post",PostSchema);

export default Post;