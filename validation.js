"use strict";

let valid = {};

function ValidationResponse (tipo, longitud) {
    this.tipo = tipo;
    this.longitud = longitud;
}
/**
 * Validación si es un dato de tipo numérico.
 * @param {string} data Dato a validar.
 * @param {number} longitud Dato a validar.
 * @returns {boolean}
 */
 valid.number = function (data,longitud) {
    const regNumeros = /^[0-9]+$/;
    let tipo = regNumeros.test(data);
    let long = valid.longitud(data, longitud);
    let resp = new ValidationResponse(tipo, long);
    return resp;
};
/**
 * Validación si es un dato corresponde a un email.
 * Expresión regular tomada de:
 * https://www.regular-expressions.info/email.html
 * @param {string} data Dato a validar.
 * @param {number} longitud Dato a validar.
 * @returns {boolean}
 **/
 valid.email = function (data, longitud) {
     const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     let tipo = regEmail.test(data);
     let long = valid.longitud(data, longitud);
     let resp = new ValidationResponse(tipo, long);
     return resp;
};

/**
 * Validación si es un dato de tipo numérico.
 * @param {string} data Dato a validar.
 * @param {number} longitud Dato a validar.
 * @returns {boolean}
 */
 valid.decimal = function (data, longitud) {
    const regDecimal = /^\d+(\.\d{1,2})?$/;
    let tipo = regDecimal.test(data);
    let long = valid.longitud(data, longitud);
    let resp = new ValidationResponse(tipo, long);
    return resp;
};

/**
 * Validación de longitud.
 * @param {string} data Dato a validar.
 * @param {number} longitud Dato a validar.
 * @returns {boolean}
 */
 valid.longitud = function (data, longitud) {
     return data.length >= longitud;
};
