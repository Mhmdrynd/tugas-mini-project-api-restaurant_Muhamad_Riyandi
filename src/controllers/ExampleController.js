const menuModel = require("../models/menuModel")

const exampleController = {}

exampleController.getAll = (req,res) => {
    const menus = menuModel.getAll()
    res.json({
        message : menus
    })
}
// silahkan buat varian controller lain sesuai fitur masing masing
exampleController.create = (req,res) => {
    const menus = menuModel.create(req.body)
    res.json({
        message : menus
    })
}
// module.exports = exampleController
// menuController.select = (req,res) => {
//     const {id} = req.params
//     const menu = menuModel.findById(id,(err,rows) => {
//         if(err){
//             throw err
//         }else {
//             res.json({
//                 data : rows
//             })
//         }
//     })
    
// }
// menuController.update = (req,res) => {
//     try {
//         const updateMenu = menuModel.update(req.params.id,req.body,(err,rows) => {
//             if(err){
//                 throw err
//             }else {
//                 return res.json({
//                     message : "Data berhasil diupdate !"
//                 })
//             }
//         })
        
//     } catch (error) {
//         return res.json({
//             message : error.message
//         })
//     }
// }
// menuController.delete = (req,res) => {
//     try {
//         const deleteMenu = menuModel.delete(req.params.id,(err,rows) => {
//             if(err){
//                 throw err
//             }else {
//                 return res.json({
//                     message : "Data berhasil dihapus!"
//                 })
//             }
//         })
        
//     } catch (error) {
//         return res.json({
//             message : error.message
//         })
//     }
// }

//custumer

// exampleController.getAllCustumer = (req,res) => {
//     const customer = custumerModel.getAll()
//     res.json({
//         message : customer
//     })
// }

// exampleController.createCustumer = (req,res) => {
//     const customer = custumerModel.create(req,body)
//     res.json({
//         message : customer
//     })
// }
// exampleController.selectCustumer = (req,res) => {
//     const customer = custumerModel.select(req,body)
//     res.json({
//         message : customer
//     })
// }
// exampleController.updateCustumer = (req,res) => {
// const customer = custumerModel.update(req,body)
//     res.json({
//         message : customer
//     })
// }
// exampleController.deleteCustumer = (req,res) => {
// const customer = custumerModel.delete(req,body)
//     res.json({
//         message : customer
//     })
// }

// //categories

// exampleController.getAllCategories = (req,res) => {
//     const categories = categoriesModel.getAll()
//     res.json({
//         message : categories
//     })
// }
// exampleController.createCategories = (req,res) => {
//     const categories = categoriesModel.create(req,body)
//     res.json({
//         message : categories
//     })
// }
// exampleController.selectCategories = (req,res) => {
//     const categories = categoriesModel.select(req,body)
//     res.json({
//         message : categories
//     })
// }
// exampleController.updateCategories = (req,res) => {
//     const categories = categoriesModel.update(req,body)
//     res.json({
//         message : categories
//     })
// }
// exampleController.deleteCategories = (req,res) => {
//     const categories = categoriesModel.delete(req,body)
//     res.json({
//         message : categories
//     })
// }

module.exports = exampleController