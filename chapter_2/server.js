const express = require("express");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    console.log("yes u are here")
    res.send("<h1>hello</h1>")
})

app.get("/",(req,res)=>{
    console.log("yes u are here")
    res.send("<h2>hello</h2>")
})

 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

 