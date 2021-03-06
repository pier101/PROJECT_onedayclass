const Sequelize = require("sequelize");

module.exports = class Oclass extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                classNum: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                // Category_categoryNum: {
                //     type: Sequelize.INTEGER.UNSIGNED,
                //     allowNull: true,
                // },
                // user_userId: {
                //     type: Sequelize.STRING(30),
                //     allowNull: true,
                // },
                classTitle: {
                    type: Sequelize.STRING(45),
                    allowNull: false,
                },
                classAddr: {
                    type: Sequelize.STRING(45),
                    allowNull: false,
                },
                classPrice: {
                    type: Sequelize.STRING(45),
                    allowNull: false,
                },
                classQty: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                classContent: {
                    type: Sequelize.STRING(3000),
                    allowNull: true,
                },
                classDate: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "Oclass",
                tableName: "oclasses",
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(db) {
        db.Oclass.belongsTo(db.User, {
            foreignKey: "userId",
            targetKey: "userId",
        });
        db.Oclass.hasMany(db.OrderClassDetail, {
            foreignKey: "classNum",
            sourceKey: "classNum",
        });
        db.Oclass.hasMany(db.OrderClass, {
            foreignKey: "classNum",
            sourceKey: "classNum",
        });
        db.Oclass.hasMany(db.Comment, {
            foreignKey: "classNum",
            sourceKey: "classNum",
        });
        db.Oclass.belongsTo(db.Category, {
            foreignKey: "categoryNum",
            targetKey: "categoryNum",
        });
    }
};
