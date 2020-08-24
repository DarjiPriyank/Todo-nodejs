const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const { DB, PORT } = require("./config");
const consola = require("consola");
const cors = require("cors")
const todo = require('./route/todo');

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(morgan("dev"));
app.use("/todo",todo)
const startApp = async() => {
  try {
    await mongoose.connect(DB,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify:  false
    })
    consola.success({
      message:`MongoDB Connected${DB}`,
      success: true,
      badge: true
    })

    app.listen(PORT,()=>{
      consola.success({
        message:`Server Listen on port: ${PORT}`,
        success: true
      })
    })
  } catch (e) {
    consola.error({
      message:`Error while connecting to mongodb: ${e}`,
      success: false
    });
    startApp();
  }
}

startApp();
