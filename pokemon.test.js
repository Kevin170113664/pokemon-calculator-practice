const assert = require('assert')
const {pokemon} = require('./pokemon')
const {type} = require('./pokemon-type')

describe('pokemon calculator', () => {

  it('should calculate single type pokemon resistance', function () {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getResistance(), {electric: 0.5, steel: 0.5, flying: 0.5})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getResistance(), {ghost: 0})
  });

  it('should calculate single type pokemon weakness', function () {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getWeakness(), {ground: 2})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getWeakness(), {fighting: 2})
  });

});