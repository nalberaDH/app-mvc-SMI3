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
    );

    Categories.associate = (models) => {
        Categories.hasMany(models.Products, {
            as: 'product',
            foreignKey: 'id_category'
        });
    }

    return Categories;
}