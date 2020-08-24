const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.get('/',(req, res) => {
  Todo.find({}, (err,data) => {
    if(err) {console.log(err)}
    console.log(data);
    res.json(data)
  });
})

router.post('/create', (req, res)=>{
  console.log(req.body)
  Todo.create(req.body, (err, data)=>{
    console.log(data);
    if(err) { console.log(err)}
    res.json(data);
  })
})

router.put('/edit/:id', (req, res, next) => {
  console.log(req.body)
  Todo.findByIdAndUpdate(req.params.id,
    {$set:{completed:req.body.completed,todo:req.body.todo}},
    (err, data)=> {
      if(err) {console.log(err); return next(err);}
      res.json({message: "Updated"})
    })
})

router.delete("/delete/:id", (req, res, next) => {
  Todo.findByIdAndDelete(req.params.id, (err, data)=> {
    if(err) {console.log(err)}
    console.log(data)
    res.status(200).json({message:"Deleted"})
  })
})

module.exports = router;
