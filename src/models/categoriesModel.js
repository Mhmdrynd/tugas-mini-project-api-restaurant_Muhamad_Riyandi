const db = require("../../db/config")

const categoriesModel = {}

categoriesModel.getAll = (cb) => {
    let rowData
    const query = db.all("SELECT * FROM categories", (err,rows) => {
        if(err){
            cb(err,null)
        }else {
            cb(null,rows)
        }
    })
    return query
}

categoriesModel.create = (data) => {
    return db.run(`INSERT INTO categories (name) VALUES ('${data.name}')`,(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

categoriesModel.getById = (id,cb) => {
    return db.get(`SELECT * FROM categories WHERE id = ${id}`, (err, row) =>{
        if(err){
            cb(err, null)
        }else {
            cb(null,row)
        }
    })
}

categoriesModel.update = (id,data,cb) => {
    return db.run (`UPDATE categories SET nama = ${data.name}`, (err,row) => {
        if(err) {
            cb(err,null)
        }else {
            cb(null, row)
        }
    })
}
categoriesModel.delete = (data) => {
    return db.run(`DELETE FROM categories WHERE id = ${id}`,(err,row) => {
        if(err){
            cb(err,null)
        }else {
            cb(null,row)
        }
    })
}

module.exports = categoriesModel