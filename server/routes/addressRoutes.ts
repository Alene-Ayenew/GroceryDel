import express from "express";
import auth from "../middleware/auth.js";
import {
  addAddresses,
  deleteAddress,
  getAddresses,
  updateAddresses,
} from "../controllers/addressController.js";
const addressRouter = express.Router();
addressRouter.get("/", auth, getAddresses);
addressRouter.post("/", auth, addAddresses);
addressRouter.put("/:id", auth, updateAddresses);
addressRouter.delete("/:id", auth, deleteAddress);
 export default addressRouter