import { Application } from "@oak/oak";
import router from "./routes/api.ts";
import { oakCors } from "@tajpouria/cors";

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
