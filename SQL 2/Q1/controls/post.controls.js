import { user } from "../model/user.model.js";
import { Post } from "../model/Post .model.js";

export const createPost = async (q, r) => {
  const num = Number(q.params.Id);
  const post = await Post.create({ ...q.body, UserId: num });
  r.json(post);
};

export const getUserPosts = async (q, r) => {
  const user = await User.findByPk(q.params.userId, { include: [Post] });
  r.json(user ? user.Posts : []);
};

export const updatePost = async (q, r) => {
  await Post.update(q.body, { where: { id: q.params.id } });
  r.json({ message: "Post updated" });
};

export const deletePost = async (q, r) => {
  await Post.destroy({ where: { id: q.params.id } });
  r.json({ message: "Post deleted" });
};
