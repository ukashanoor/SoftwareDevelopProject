import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = await Post({
      userID,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const postAll = await Post.find();
    res.send(201).json(postAll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const postAll = await Post.find();
    res.send(200).json(postAll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;

    const post = await Post.find({ userId });
    res.send(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);
    if (isLiked) {
        post.likes.delete(userId);
    } else {
        post.like.set(userId, true);
    }
    const updatedPost = await Post.findByIdAndUpdate(
        id,
        { like: post.likes }
    );
    res.send(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
