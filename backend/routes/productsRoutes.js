import { Router } from "express";
import products from "../data/products.js";
import { getProducts,getProductById } from "../controllers/productController.js"; 
const router = Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
