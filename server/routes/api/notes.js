var express = require('express');
var router = express.Router();
const Notes = require("../../model/notes");

/* GET home page. */
router.get('/', function(req, res, next) {
  Notes.find()
  .then(notes=>res.status(200).send(notes))
  .catch(err=>res.status(400).send({"msg":"Error occurred!"}))
});
router.post("/",function(req,res,next){
   if(!req.body.content){
        res.status(400).send({"msg":"Please enter a text!"});
    }else{
        new Notes({content:req.body.content})
            .save()
            .then(notes=>res.status(200).send(notes))
            .catch(err=>res.status(400).send({"msg":"Could not save note!"}))
    }
})

module.exports = router;
