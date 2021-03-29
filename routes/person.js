const express= require('express')

const controllers = require('../Controllers/Person.controllers');

 const router=express.Router()
const Person=require('../models/Person')

 router.get('/test',(req,res)=>{
res.send("hello hajer")

 })

 router.post("/", controllers.addPerson);

 router.get("/", controllers.getAllPersons);
 router.get("/:id", controllers.getById);
 router.put("/:id", controllers.updateById);
 
router.delete("/:id", controllers.deleteById);



 module.exports = router