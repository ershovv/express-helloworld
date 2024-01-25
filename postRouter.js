import { Router } from "express";
import PostController from "./PostController.js"

const postRouter = new Router();

postRouter.post('/posts', PostController.create);
postRouter.get('/posts');
postRouter.get('/posts/:id');
postRouter.put('/posts');
postRouter.delete('/posts/:id');

export default postRouter;