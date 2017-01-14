var Q = require( 'q' );

module.exports = function promisedLambdaFactory() {

    var deferred = Q.defer();
    var promise = deferred.promise;

    promise.succeed = function( result ) {
        deferred.resolve( result );
    };

    promise.fail = function( result ) {
        deferred.reject( result );
    };

    promise.done = function( result ) {
        deferred.resolve( result );
    };

    return promise;

};
