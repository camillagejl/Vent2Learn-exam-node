module.exports = (sequelize, Sequelize) => {
    const vent = sequelize.define("vent", {
        ventId: {
            type: Sequelize.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true
        },
        roomId: {
            type: Sequelize.INTEGER, allowNull: false
        },
        ventNumber: {
            type: Sequelize.INTEGER, allowNull: false
        },
        ventilationLevel: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        heatingLevel: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        currentTemperature: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        currentHumidity: {
            type: Sequelize.DECIMAL, allowNull: false
        },
    });

    return vent;
};
