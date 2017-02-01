'use strict';

const express = require('express');
const router = express.Router();

router.get('/courses', function(req, res){
 console.log('i am here');
  let courses =[];
  courses.push({title:'apitest'})
  res.status(200).json(courses);
});

module.exports = router;
