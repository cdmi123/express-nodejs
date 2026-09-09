const user = require('../model/usermodel');

exports.Insert = async (req,res) =>{
    var data = await user.create(req.body);
    res.status(200).json({
        status:"Insert Data",
        data
    })
}

exports.SelectData = async (req,res) =>{
    var data = await user.find();

    res.status(200).json({
        status:"Select Data",
        data
    })
}

exports.GetSingleData = async (req,res) =>{
    var id = req.params.id;
    var data = await user.findById(id);
    res.status(200).json({
        status:"Select Data",
        data
    })
}

exports.UpdateData = async (req,res) =>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"Data Updated"
    })
}

exports.DeleteData = async (req,res) =>{
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id);
    res.status(200).json({
        status:"Data Delete"
    })
}