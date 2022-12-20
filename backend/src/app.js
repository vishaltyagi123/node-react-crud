const express     = require("express");
const bodyParser  = require("body-parser");
const createError = require("http-errors");
const cors        = require("cors");
const db          = require("./model/indexx");
//const prodRoutes  = require("./routes/product");
const userRoutes  = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());

db.sequelize.sync({ force: false })
.then( ()  => { console.log(" re-sync db ")})
.catch(err => { console.log("something went wrong !!")});


app.get("/", (req, res) => {
  res.json({ message: "Work is in progress" });
})

//app.use('/api/pim', prodRoutes);
app.use('/api/v1/user', userRoutes);

app.use( async (req, res, next) => {
  next(createError.NotFound('This Route Doesn`t Exist'));
});

  
app.use(function (err, req, res, next) {
  res.send({
    error:{
      status: 500,
      message:err.message
    },
  })
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});