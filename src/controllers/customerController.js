const customerModel = require("../models/customerModel");

const customerController = {};

customerController.getAll = (req,res) => {
    const Custumer = customerModel.getAll((err, rows) => {
        if(err){
            throw err
        }else {
            req.json({
                data : rows
            })
        }
    })

}

customerController.create = (req,res) => {
    try {
    const createCustomer = customerModel.create(req.body)
    return res.json({
        message: "Data berhasil dibuat !"
    })
   }catch (error) {
        return res.json({
            message : error.message
        })
   }
}

customerController.getById = (req,res) => {
    const {id} = req.params
    const customer = customerModel.findById(id,(err,rows) =>{
        if(err){
            throw err
        }else {
            res.json({
                data: rows
            })
        }
    })

}

customerController.update = (req,res) => {
  try{
    const updatecustomer = customerModel.update(req.params.id, req.body, (err,rows) =>{
        if(err){
            throw err
        }else {
            return res.json({
                message: "Data Custumer Berhasil diUpdate !"
            })
        }
    })
  } catch (error) {
    return res.json({
        message : error.message
    })
  }
    
}

customerController.delete = (req,res) => {
    try{
    const customer = customerModel.delete(req.params.id, (err,rows) => {
        if(err){
            throw err
        }else {
            return res.json({
                message: "Data Custumer Berhasil dihapus !"
            })
        }
    })

    }catch (error) {
        return req.json({
            message : error.message
        })
    }
}

module.exports = customerController