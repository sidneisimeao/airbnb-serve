
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Property extends Model {
  user() {
    return this.belongsTo('App/Models/user');
  }

  images() {
    return this.hasMany('App/Models/image');
  }
}

module.exports = Property;
