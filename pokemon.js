const pokemon = (type) => {
  return {
    getResistance: () => {
      return type.resistance
    },
    getWeakness: () => {
      return type.weakness
    }
  }
}

module.exports = {pokemon}