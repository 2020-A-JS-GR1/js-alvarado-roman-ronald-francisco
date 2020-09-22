/**
 * TipoInstrumento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datasrore: 'default', // nombre conexion

  tableName: 'tipoInstrumento', // nombre tabla

  attributes: {
    nombreTipoInstrumento:{
      type: 'string',
      minLength: 6,
      required: true, // Por defecto es false
    },

    //RELACIONES
    // tipoInstrumento -> instrumento
    instrumentos: {  //Uno a muchos (nombre en plural)
      collection: 'instrumento', //Modelo a relacionarse
      via: 'tipo' //Nombre FK
    }

  },

};

