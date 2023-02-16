const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        author: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Post = model("Post", postSchema);

module.exports = Post;
