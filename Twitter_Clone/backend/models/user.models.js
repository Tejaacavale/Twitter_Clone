import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    followers: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
        }
         
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
            }
    ],
    coverPic: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    } ,
    link:{
        type: String,
        default: ""
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
        }
    ]

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;