module.exports = (sequelize, Sequelize) => {
    const room = sequelize.define("room", {
        roomId: {
            type: Sequelize.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true
        },
        roomName: {
            type: Sequelize.STRING, allowNull: false
        }
    });

    return room;
};
