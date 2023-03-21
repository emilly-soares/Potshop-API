const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const SessionController = require("./controllers/SessionController");
//const authMiddleware = require("./middlewares/auth");

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.post("/products", ProductController.store);
routes.get("/products", ProductController.list);
routes.delete("/products/:id", ProductController.destroy);
routes.put("/products/:id", ProductController.update);
routes.get("/products/:id", ProductController.index);

//routes.use(authMiddleware);

routes.get("/users", UserController.list);
routes.delete("/users/:id", UserController.destroy);
routes.put("/users/:id", UserController.update);

module.exports = routes;