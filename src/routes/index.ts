import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("made by ausikek :>");
});

export default router;
