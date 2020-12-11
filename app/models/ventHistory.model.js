module.exports = (sequelize, Sequelize) => {
    const ventHistory = sequelize.define("ventHistory", {
        historyEntryId: {
            type: Sequelize.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true
        },
        ventId: {
            type: Sequelize.INTEGER, allowNull: false
        },
        ventilationLevel: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        heatingLevel: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        temperature: {
            type: Sequelize.DECIMAL, allowNull: false
        },
        humidity: {
            type: Sequelize.DECIMAL, allowNull: false
        },
    });

    return ventHistory;
};
