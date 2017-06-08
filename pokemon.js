const pokemon = (type) => {
  return {
    getResistance: () => {
      return type.resistance
    }
  }
}

module.exports = {pokemon}