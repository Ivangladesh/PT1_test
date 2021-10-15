"use strict";

let valid = {};

const regexEspacio = /%20/g;

/**
 * Validación si es un dato de tipo numérico.
 * @param {string} data Dato a validar.
 * @returns {boolean}
 */
 valid.number = function (data) {
    const regNumeros = /^[0-9]+$/;
    var ok = data.match(regNumeros);
    alert(ok);
    return ok;
};
/**
 * Validación si es un dato de tipo texto.
 * @param {string} data Dato a validar.
 * @returns {boolean}
 **/
 valid.text = function (data) {
     
};

/**
 * Validación si es un dato de tipo numérico.
 * @param {string} data Dato a validar.
 * @returns {boolean}
 */
 valid.decimal = function (data) {

};
