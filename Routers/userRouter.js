import express from "express";
import {
  createUser,
  deleteData,
  fetchData,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

//routes

router.post("/create", createUser);
router.get("/getall", fetchData);
router.delete("/delete/:id", deleteData);
router.put("/edit/:id", updateUser);

export default router;
