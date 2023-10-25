module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users',{
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        lastName:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        phone:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
    )

    return Users;
}