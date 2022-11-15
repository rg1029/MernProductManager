const ProductController = require("../controllers/Product.controller")

module.exports = app => {
    // CREATE
    app.post("/api/products", ProductController.createProduct)
    // READ ALL
    app.get("/api/products", ProductController.allProducts)
    // READ ONE
    app.get("/api/products/:product_id", ProductController.oneProduct)
    // UPDATE
    app.put("/api/products/:product_id", ProductController.updateProduct)
    // DELETE
    app.delete("/api/products/:product_id", ProductController.deleteProduct)
}