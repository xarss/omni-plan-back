import { Router } from "@oak/oak";
import { fetchFormStructure, fetchGPT } from "../controllers/gptC.ts";

const router = new Router();

router.get("/api", (context) => {
    context.response.body = "Api is Running!";
});
router.post("/api/gpt", fetchGPT);
router.post("/api/formStructure", fetchFormStructure);

export default router;
