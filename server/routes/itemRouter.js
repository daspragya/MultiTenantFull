const express = require("express");
const router = express.Router();
const itemCtrl = require("../controllers/itemCtrl");
const authCtrl = require("../controllers/authCtrl");

router.get("/items", [authCtrl.authMiddleWare], itemCtrl.getItems);
router.get("/item/:itemId", [authCtrl.authMiddleWare], itemCtrl.getItemById);
router.post("/item", [authCtrl.authMiddleWare], itemCtrl.createItem);
router.put("/item/:itemId", [authCtrl.authMiddleWare], itemCtrl.updateItem);
router.delete("/item/:itemId", [authCtrl.authMiddleWare], itemCtrl.deleteItem);

module.exports = router;
