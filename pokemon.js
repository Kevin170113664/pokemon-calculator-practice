const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getResistance: () => {
      const defenceFactor = _.mergeWith(Object.assign({}, types[0].weakness, types[0].resistance),
        Object.assign({}, types[1].weakness, types[1].resistance),
        (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })

      return _.pickBy(defenceFactor, factor => factor < 1)
    },
    getWeakness: () => {
      return types.weakness
    }
  }
}

module.exports = {pokemon}