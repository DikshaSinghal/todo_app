const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diksha:diksha@cluster0-crgwu.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
  console.log("connected to db")
});
//
const conn = mongoose.connection;
const listSchema = new mongoose.Schema({
  thing: String,
  date: String,
});
//
const todolistmodel = mongoose.model('mydata',listSchema);
// var persons = new todolistmodel(
//   {
//     thing: "chai",
//     date: "5:30",
//   }
// );
// conn.on("connected",function(){
//   console.log("Connected Successfully");
// });
// conn.on("disconnected",function(){
//   console.log("Disconnected Successfully");
// });
// conn.on('error',console.error.bind(console, 'connection error:'));
// conn.once('open',function(){
//      persons.save(function(err,res){
//        if(err) throw error;
//        console.log(res);
//        conn.close();
//      });
// });
// var todolistmodel = mongoose.model('person', listSchema);
module.exports = todolistmodel;
// module.exports = {
//   listCollection: mongoose.model('mydata', listSchema)
// }
