module.exports = (sequelize, dataTypes) => {
    const Products = sequelize.define('Products',{
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        price:{
            type: dataTypes.DECIMAL(10,2),
            defaultValue: null
        },
        description:{
            type: dataTypes.TEXT,
        },
        image:{
            type: dataTypes.STRING,
        },
        id_category:{
            type: dataTypes.INTEGER,
        }
    },
    {
        tableName: 'products',
        timestamps: false
    }
    );

    Products.associate = (models) => {
        Products.belongsTo(models.Categories, {
            as: 'category',
            foreignKey: 'id_category'
        });
    }

    return Products;
}