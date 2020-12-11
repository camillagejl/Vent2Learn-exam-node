module.exports = app => {
    const vents = require("../controllers/vent.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", vents.create);

    // Retrieve all Tutorials
    router.get("/", vents.findAll);
    //
    // // Retrieve all published Tutorials
    // router.get("/published", vents.findAllPublished);
    //
    // Retrieve a single Tutorial with id
    router.get("/:id", vents.findOne);
    //
    // Update a Tutorial with id
    router.put("/:id", vents.update);
    //
    // // Delete a Tutorial with id
    // router.delete("/:id", vents.delete);
    //
    // // Create a new Tutorial
    // router.delete("/", vents.deleteAll);

    app.use('/api/vents', router);
};
