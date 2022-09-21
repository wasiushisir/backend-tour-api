const express = require('express')
const mongoose = require('mongoose');
const colors=require('colors')
const port=process.env.PORT || 8090
require('dotenv').config()
const app=require('./app')



//database connection


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.LOCAL_DATABASE}`);
  console.log('database connected'.red.bold);
  

}








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.yellow.bold)
  })