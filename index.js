const express = require( 'express' )
const app = express()
const cors = require( 'cors' ); // Import CORS middleware
const port = 5000
const mongoDB = require( './db' )
mongoDB()

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
} )

// Enable CORS middleware
app.use( cors() );

app.use( ( req, res, next ) => {
    res.setHeader( "Access-Control-Allow-Origin", "https://backend-phi-liard.vercel.app" );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
} )

app.use( express.json() )

app.use( '/api', require( './Routes/User' ) );
app.use( '/api', require( './Routes/DisplayData' ) );

app.listen( port, () => {
    console.log( `App listening on port ${port}` )
} )