import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
// Создание модели Post на основе схемы PostSchema
const Post = model('Post', PostSchema);

export default Post;
