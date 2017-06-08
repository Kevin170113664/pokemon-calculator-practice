const _ = require('lodash')

const defaultFactor = 1
const pokemon = (...types) => {
  return {
    getResistance: () => {
      let getSingleTypeFactor = (type) => {
        if (!type) return {}
        return Object.assign({}, type.weakness, type.resistance);
      };
      const defenceFactor = _.mergeWith(getSingleTypeFactor(types[0]), getSingleTypeFactor(types[1]),
        (obj, src) => {
          obj = _.isNumber(obj) ? obj : defaultFactor
          src = _.isNumber(src) ? src : defaultFactor
          return obj * src
        })

      return _.pickBy(defenceFactor, factor => factor < defaultFactor)
    },
    getWeakness: () => {
      return types[0].weakness
    }
  }
}

module.exports = {pokemon}