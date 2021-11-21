import  Express  from "express";
import { 
    getAllproducts,
    createproducts,
    getproductsById,
    updateproducts,
    deleteproducts
 } from "../controlers/products.js";

const router = Express.Router();

router.get('/', getAllproducts);
router.get('/:id', getproductsById);
router.post('/', createproducts);
router.patch('/:id', updateproducts);
router.delete('/:id', deleteproducts);

export default router;