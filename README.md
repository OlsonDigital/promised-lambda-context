# Promised Lambda Context

A factory returning a promise with Lambda context properties.  
For use in unit testing Lambdas.

## Installation 

`npm install --save-dev promised-lambda-context`

## Usage

`promised-lambda-context` is a factory function which returns a Q Promise 
with the `succeed`, `fail`, and `done` methods expected of an AWS Lambda context. 
This eases production of unit tests for Lambda event handlers.  The following 
is a dummy unit test using Mocha and Should.

```
const should = require( 'should' );
const promisedContextFactory = require( 'promised-lambda-context' );
const handler = require( '../path/to/handler' );

describe( 'Event Handler', function() {
    it ( 'should succeed', function() {
        let context = promisedContextFactory();
        
        handler( { "fake": "event" }, context );
        
        return context.should.be.fulfilled();
    } );
) };