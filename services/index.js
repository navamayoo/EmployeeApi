const { Model } = require("mongoose");

exports.generateCrudMethod = Model =>{
    return {
        getAll : () => Model.find(),
        getById : id => Model.findById(id),
        create : record => Model.create(record)
    }
}