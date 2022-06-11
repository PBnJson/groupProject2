// requiring necessary dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // picture: {
        //     type: DataTypes.BLOB,
        //     allowNull: true,
        //     references:{
        //         model: 'user',
        //         key: 'image'
        //     }
        // },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;