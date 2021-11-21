 import product from "../models/productsmodel.js";

 export const getAllproducts = async (req, res) =>{
     try {
         const products =  await product.findAll();
         res.json(products);
     } catch (error) {
         res.json({ message: error.message})
     }
}
export const getproductsById = async (req, res) =>{
    try {
        
        let products =  await product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(products[0]);
    } catch (error) {
        res.json({ message: error.message})
    }
}
 export const createproducts = async (req, res) =>{
     try {
        await product.create(req.body);
         res.json({
             "massage": "product created"
         });
     } catch (error) {
         res.json({ message: error.message})
     }
}
 export const updateproducts = async (req, res) =>{
     try {
        await product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
         res.json({
             "massage": "product update"
         });
     } catch (error) {
         res.json({ message: error.message})
     }
}
export const deleteproducts = async (req, res) =>{
    try {
       await product.destroy({
           where: {
               id: req.params.id
           }
       });
        res.json({
            "massage": "product deleted"
        });
    } catch (error) {
        res.json({ message: error.message})
    }
}