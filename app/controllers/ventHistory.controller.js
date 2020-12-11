const db = require("../models");
const VentHistory = db.ventHistory;
const Op = db.Sequelize.Op;

// Create and Save a new VentHistory
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Name can not be empty!"
    //     });
    //     return;
    // }

    // Create a VentHistory
    const ventHistory = {
        ventId: req.body.ventId,
        ventilationLevel: req.body.ventilationLevel,
        heatingLevel: req.body.heatingLevel,
        temperature: req.body.currentTemperature,
        humidity: req.body.currentHumidity

    };

    // Save VentHistory in the database
    VentHistory.create(ventHistory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the VentHistory."
            });
        });
};

// Retrieve all VentHistorys from the database.
exports.findAll = (req, res) => {
    const ventHistoryId = req.query.ventHistoryId;
    var condition = ventHistoryId ? {ventHistoryId: {[Op.like]: `%${ventHistoryId}%`}} : null;

    VentHistory.findAll({where: condition})
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
// Find a single VentHistory with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    VentHistory.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving VentHistory with id=" + id + ": " + err
            });
        });

};

// Update a VentHistory by the id in the request
exports.update = (req, res) => {
    console.log("This is relevant");
    const id = req.params.id;

    VentHistory.update(req.body, {
        where: {ventHistoryId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "VentHistory was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update VentHistory with id=${id}. Maybe VentHistory was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating VentHistory with id=" + id + ": " + err
            });
        });

};
//
// // Delete a VentHistory with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     VentHistory.destroy({
//         where: {id: id}
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "VentHistory was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete VentHistory with id=${id}. Maybe VentHistory was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete VentHistory with id=" + id
//             });
//         });
//
// };
//
// // Delete all VentHistorys from the database.
// exports.deleteAll = (req, res) => {
//     VentHistory.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({message: `${nums} VentHistorys were deleted successfully!`});
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
// // Find all published VentHistorys
// exports.findAllPublished = (req, res) => {
//     VentHistory.findAll({where: {published: true}})
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
