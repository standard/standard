'use strict';

module.exports = noTryCatch;

function noTryCatch(context) {
    return {
        'TryStatement': function tryStatement(node) {
            context.report(node, 'Unexpected use of "try" statement.');
        }
    };
}
