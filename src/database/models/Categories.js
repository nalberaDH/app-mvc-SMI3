module.exports = (sequelize, dataTypes) => {
    const Categories = sequelize.define('Categories',{
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description:{
            type: dataTypes.STRING,
        }
    },
    {
        tableName: 'categories',
        timestamps: false
    }
    )

    return Categories;
}