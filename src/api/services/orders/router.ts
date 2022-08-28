import { Router } from "express";
const router = Router();
import { getall, one, create, remove, update, getall_my } from "./controller";
import { checkToken, authorize } from "../../../auth/token_validation";
router.get("/", checkToken, getall);
router.get("/find/my", checkToken, getall_my);
router.get("/:id", checkToken, one);
router.post("/", checkToken, create);
router.delete("/:id", checkToken, remove);
router.put("/:id", checkToken, update);
export default router;
