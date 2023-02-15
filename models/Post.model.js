const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        author: {
            type: String,
            required: [true, "Name is required."],
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Post = model("Post", postSchema);

module.exports = Post;
