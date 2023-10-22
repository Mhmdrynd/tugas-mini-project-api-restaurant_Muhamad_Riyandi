const db = require("../../db/config")

const customerModel = {}

customerModel.getAll = (cb) => {
    let rowData
    const query = db.all("SELECT * FROM custumer",(err,rows) => {
        if(err) {
            cb(err,null)
        }else {
            cb(null,rows)
           
        }
    })
    console.log(rowData);
    return query
}

customerModel.create = (data) => {
    return db.run(`INSERT INTO custumer (name,addres,email) VALUES ('${data.name,data.addres, data.email}')`,(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

customerModel.getById = (id,cb) => {
    return db.get ( `SELECT * FROM custumer WHERE id = ${id}`, (err,row) => {
        if(err){
            cb(err,null)
        }else{
            cb(null,row)
        }
    })
}
customerModel.update = (data) => {
    return db.run (`UPDATE customer SET nama = ${data.name}, addres = ${data.addres}, email = ${data.email} WHERE id = ${id}`,(err,row) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null,row)
        }
    })
}
customerModel.delete = (id,cb) => {
    return db.run (`DELETE menu FROM custumer WHERE id = ${id}`, (err,row) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null,row)
        }
    })
}

module.exports = customerModel