const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getResistance: () => {
      let getSingleTypeFactor = (type) => {
        if (!type) return {}
        return Object.assign({}, type.weakness, type.resistance);
      };
      const defenceFactor = _.mergeWith(getSingleTypeFactor(types[0]), getSingleTypeFactor(types[1]),
        (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })

      return _.pickBy(defenceFactor, factor => factor < 1)
    },
    getWeakness: () => {
      return types[0].weakness
    }
  }
}

module.exports = {pokemon}