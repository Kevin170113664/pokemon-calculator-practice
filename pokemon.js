const _ = require('lodash')

const defaultFactor = 1
const getDefenceFactor = (types, isReverse = false) => {
  const getSingleTypeFactor = type => {
    if (!type) return {}

    if (isReverse) {
      const _reverse = (defenceFactor) => {
        const reverseMapping = {
          1: 1,
          0.5: 2,
          2: 0.5,
          0: 2
        }

        const newFactor = {}
        _.each(defenceFactor, (value, type) => newFactor[type] = reverseMapping[value])
        return newFactor
      }
      return Object.assign({}, _reverse(type.weakness), _reverse(type.resistance));
    }

    return Object.assign({}, type.weakness, type.resistance);
  };

  return _.mergeWith(getSingleTypeFactor(types[0]), getSingleTypeFactor(types[1]),
    (obj, src) => {
      obj = _.isNumber(obj) ? obj : defaultFactor
      src = _.isNumber(src) ? src : defaultFactor
      return obj * src
    })
}

const pokemon = (...types) => {
  return {
    getResistance: () => {
      return _.pickBy(getDefenceFactor(types), factor => factor < defaultFactor)
    },
    getWeakness: () => {
      return _.pickBy(getDefenceFactor(types), factor => factor > defaultFactor)
    },
    getReverseResistance: () => {
      return _.pickBy(getDefenceFactor(types, true), factor => factor < defaultFactor)
    }
  }
}

module.exports = {pokemon}