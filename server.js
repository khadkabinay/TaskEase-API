
// external imports
const express = require("express");
const cors = require("cors");



const port = process.env.PORT || 4000;
const app = express();


app.get('/', (req, res)=> {

    res.send("Home page ")
})


// middleware - JSON parsing
app.use(express.json());
app.use(cors());




// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));