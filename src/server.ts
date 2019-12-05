import express from "express";

const app = express();
// const port = process.env.PORT || 8080; // default port to listen
const port = 80;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world Zzz from port: " + port);
} );

// start the Express server
app.listen( port, () => {
    // console.log( `server started at http://localhost:${ port }` );
} );
