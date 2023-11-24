import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); //URL파라메터 입력 받는 부분에 정규표현식으로 숫자라고 적었으므로 이게 아래로 와도 상관없음.

export default videoRouter;
