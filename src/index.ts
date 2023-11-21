import Koa from "koa";

const app = new Koa();

const port = 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
