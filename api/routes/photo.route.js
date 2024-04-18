import express from "express";
import {
  createPhoto,
  getPhoto,
  deletePhoto,
  updatePhoto,
  getPhotos,


} from "../controllers/photo.controller.js";


const router = express.Router();

router.post("/create", createPhoto);
router.get("/get/:id", getPhoto);
router.delete("/delete/:id", deletePhoto);
router.post("/update/:id", updatePhoto);
router.get("/get", getPhotos);




export default router;