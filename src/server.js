import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("<h1>Home</h1>");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("<h1>Edit User</h1>");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("<h1>Watch Video</h1>");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
