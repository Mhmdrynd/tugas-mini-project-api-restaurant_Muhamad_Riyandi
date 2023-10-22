const db = require("../../db/config")

const menuModel = {}

menuModel.getAll = (cb) => {
    var rowData
    const query = db.all("SELECT * FROM menu",(err,rows) => {
        if(err) {
            cb(err,null)
        }else {
            cb(null,rows)
           
        }
    })
    console.log(rowData);
    return query
}
// lanjutkan disini

menuModel.create = (data) => {
    return db.run(`INSERT INTO menu (name,price) VALUES ('${data.name,data.price}')`,(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

menuModel.getById = (id,cb) => {
    return db.get(`SELECT * FROM id= ${id}`, (err, row) => {
        if(err){
            cb(err,null)
        }else {
            cb(null,row)
        }
    })
}

menuModel.getByName = (menuName,cb) => {
    return db.all(`SELECT * FROM menu WHERE item IN ${menuName}`, (err,rows) => {
        if(err){
            cb(err,null)
        }else {
            cb(null,rows)
        }
    }) 
} 

menuModel.update = (id,data,cb) => {
    return db.run ("UPDATE menu SET item = ?, price = ? WHERE id = ?", [id, data.name, data.price], (err,row) => {
        if(err) {
            cb(err,null)
        }else {
            cb(null,row) 
        }
    })
} 

menuModel.delete = (id,cb) => {
    return db.run (`DELETE FROM menu WHERE id = ?`, `${id}`, (err,row) => {
        if(err) {
            cb(err,null)
        }else {
            cb(null,row) 
        }
    })
}


module.exports = menuModel