import Post from '../models/postModel.js';

const PostController = {
    async create(req, res) {
        try {
            const { title, description } = req.body;
            const newPost = await Post.create({ title, description });
            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async edit(req, res) {
        try {
            const postId = req.params.id; // Получаем ID поста из параметров запроса
            const { title, description } = req.body;

            const updatedPost = await Post.findByIdAndUpdate(
                postId,
                { title, description },
                { new: true } // Получаем обновленную версию поста
            );

            if (!updatedPost) {
                return res.status(404).json({ error: 'Пост не найден' });
            }

            res.json(updatedPost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const postId = req.params.id; // Получаем ID поста из параметров запроса

            const deletedPost = await Post.findByIdAndDelete(postId);

            if (!deletedPost) {
                return res.status(404).json({ error: 'Пост не найден' });
            }

            res.json({ message: 'Пост успешно удален' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async get(req, res) {
        try {
            const posts = await Post.find();

            res.json(posts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default PostController;
