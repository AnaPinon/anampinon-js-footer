'use strict';

var moment = requiere ('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @returns {string} 
 */

exports.footer = function (name) {
    return "Copyright" + moment().format ('YYYY') + " " + name + "All rights reserved";
};
