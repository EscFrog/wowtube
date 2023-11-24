import express from "express";
import morgan from "morgan";
// default로 export 하면 이름이 export한 이름과 변수명이 같을 필요가 없다는 걸 테스트하기 위해 일부러 변수명을 다르게 해보았다.
import globalRt from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRt);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
