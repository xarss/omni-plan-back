import { Router } from "@oak/oak";
import { fetchCustomFormStructure, fetchFormStructure, fetchGPT } from "../controllers/gptC.ts";

const router = new Router();

router.get("/api", (context) => {
    context.response.body = "Api is Running!";
});
router.post("/api/gpt", fetchGPT);
router.post("/api/formStructure/default", fetchFormStructure);
router.post("/api/formStructure/custom", fetchCustomFormStructure);

export default router;
