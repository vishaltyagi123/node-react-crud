module.exports = (sequelize, Sequelize) => {
    return sequelize.define("customer", {
        full_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        created_at:{
            type: Sequelize.DATE
        },
        updated_at:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
        }
    }, {
      freezeTableName: true,
      timestamps: false
    })
}