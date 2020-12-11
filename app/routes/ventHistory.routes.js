module.exports = app => {
    const ventHistory = require("../controllers/ventHistory.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", ventHistory.create);

    // Retrieve all Tutorials
    router.get("/", ventHistory.findAll);
    //
    // // Retrieve all published Tutorials
    // router.get("/published", ventHistory.findAllPublished);
    //
    // Retrieve a single Tutorial with id
    router.get("/:id", ventHistory.findOne);
    //
    // Update a Tutorial with id
    router.put("/:id", ventHistory.update);
    //
    // // Delete a Tutorial with id
    // router.delete("/:id", ventHistory.delete);
    //
    // // Create a new Tutorial
    // router.delete("/", ventHistory.deleteAll);

    app.use('/api/ventHistory', router);
};
