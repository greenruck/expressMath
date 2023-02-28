const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {frequencyCount, mathMode, convertValidate, mathMean, mathMedian} = require('./math');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertValidate(numsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
  
    let result = {
      operation: "mean",
      result: mathMean(nums)
    }
  
    return res.send(result);
  });

  app.get('/median', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a coma-seperated list of nnumbers.', 400)
    }
    let numsStrings = req.query.nums.split(',');
    let nums = convertValidate(numsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "median",
        result: mathMedian(nums)
    }
    return res.send(result);
  });

  app.get('/mode', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a coma-seperated list of numbers.', 400)
    }
    let numsStrings = req.query.nums.split(',');
    let nums = convertValidate(numsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mode",
        result: mathMode(nums)
    }
    return res.send(result);
  });

  app.use(function (err, req, res, next){
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
  });

  app.listen(3000, function(){
    console.log(`Server starting on port 3000`);
  });