const db = require("../models");
const Vent = db.vents;
const Op = db.Sequelize.Op;

// Create and Save a new Vent
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Name can not be empty!"
    //     });
    //     return;
    // }

    // Create a Vent
    const vent = {
        roomId: req.body.roomId,
        ventNumber: req.body.ventNumber,
        ventilationLevel: req.body.ventilationLevel,
        heatingLevel: req.body.heatingLevel,
        currentTemperature: req.body.currentTemperature,
        currentHumidity: req.body.currentHumidity
    };

    // Save Vent in the database
    Vent.create(vent)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vent."
            });
        });
};

// Retrieve all Vents from the database.
exports.findAll = (req, res) => {
    const ventId = req.query.ventId;
    var condition = ventId ? {ventId: {[Op.like]: `%${ventId}%`}} : null;

    Vent.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};
//
// Find a single Vent with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vent.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vent with id=" + id + ": " + err
            });
        });

};

// Update a Vent by the id in the request
exports.update = (req, res) => {
    console.log("This is relevant");
    const id = req.params.id;

    Vent.update(req.body, {
        where: {ventId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vent was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vent with id=${id}. Maybe Vent was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vent with id=" + id + ": " + err
            });
        });

};
//
// // Delete a Vent with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     Vent.destroy({
//         where: {id: id}
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Vent was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Vent with id=${id}. Maybe Vent was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Vent with id=" + id
//             });
//         });
//
// };
//
// // Delete all Vents from the database.
// exports.deleteAll = (req, res) => {
//     Vent.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({message: `${nums} Vents were deleted successfully!`});
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all tutorials."
//             });
//         });
//
// };
//
// // Find all published Vents
// exports.findAllPublished = (req, res) => {
//     Vent.findAll({where: {published: true}})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
//
// };
