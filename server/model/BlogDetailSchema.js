const {Schema,model} = require("mongoose");

const BloeDetailSchema = new Schema({
  "title":{type:String,required:true,select:false,},
  "imgUrl":{type:String,required:true,select:true},
  "content":{type:String,required:true,select:true}
});
//三个参数的含义，model名，schema名，操作的数据集合
module.exports = model("BlogDetailModel",BloeDetailSchema,"blogdetails")