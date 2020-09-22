/**
 * Instrumento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datasrore: 'default', // nombre conexion

  tableName: 'instrumento', // nombre tabla

  attributes: {
    nombre:{
      type: 'string',
      minLength: 6,
      required: true, // Por defecto es false
    },
    precio:{
      type: 'number',
      required: true, // Por defecto es false
    },
    material:{
      type: 'boolean',
      required: true, // Por defecto es false
    },

    // Relaciones
    // instrumentos <- tipoIntrumentos
    tipo: { // Nombre FK
      model: 'tipoInstrumento', //Modelo con el cual relacionamos
      required: true,  // Requerida 1 -N
      //false  // Opcional 0 - N (por defecto)
    }

  },

};

