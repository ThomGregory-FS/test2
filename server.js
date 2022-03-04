const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res, next) => {
    res.json({message: "Did you GET IT?"
    });
});

//middelware modules - used to let nodejs know there is a middleware module is a js file
//middleware modules for error handling - have in all your server.js
app.use((req, res, next) => {
    /* res.json({
        name: "Greg",
        course: "WDV353"
    }) */

    const error = new Error("NOT FOUND!!!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
})

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))