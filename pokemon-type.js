const type = {
  normal: {
    name: 'normal',
    resistance: {
      ghost: 0
    },
    weakness: {
      fighting: 2
    }
  },
  fighting: {
    name: 'fighting',
    resistance: {
      bug: 0.5,
      rock: 0.5,
      dark: 0.5
    },
    weakness: {
      psychic: 2,
      flying: 2,
      fairy: 2
    }
  },
  flying: {
    name: 'flying',
    resistance: {
      grass: 0.5,
      bug: 0.5,
      ground: 0,
      fighting: 0.5
    },
    weakness: {
      electric: 2,
      rock: 2,
      ice: 2
    }
  },
  poison: {
    name: 'poison',
    resistance: {
      grass: 0.5,
      bug: 0.5,
      poison: 0.5,
      fighting: 0.5,
      fairy: 0.5
    },
    weakness: {
      psychic: 2,
      ground: 2
    }
  },
  ground: {
    name: 'ground',
    resistance: {
      rock: 0.5,
      electric: 0,
      poison: 0.5
    },
    weakness: {
      grass: 2,
      water: 2,
      ice: 2
    }
  },
  rock: {
    name: 'rock',
    resistance: {
      normal: 0.5,
      fire: 0.5,
      poison: 0.5,
      flying: 0.5
    },
    weakness: {
      water: 2,
      grass: 2,
      fighting: 2,
      steel: 2,
      ground: 2
    }
  },
  bug: {
    name: 'bug',
    resistance: {
      grass: 0.5,
      fighting: 0.5,
      ground: 0.5
    },
    weakness: {
      fire: 2,
      flying: 2,
      rock: 2
    }
  },
  ghost: {
    name: 'ghost',
    resistance: {
      normal: 0,
      bug: 0.5,
      poison: 0.5,
      fighting: 0
    },
    weakness: {
      ghost: 2,
      dark: 2
    }
  },
  steel: {
    name: 'steel',
    resistance: {
      grass: 0.5,
      bug: 0.5,
      rock: 0.5,
      flying: 0.5,
      fairy: 0.5,
      poison: 0,
      ice: 0.5,
      psychic: 0.5,
      dragon: 0.5,
      normal: 0.5,
      steel: 0.5
    },
    weakness: {
      fire: 2,
      fighting: 2,
      ground: 2
    }
  },
  fire: {
    name: 'fire',
    resistance: {
      fire: 0.5,
      grass: 0.5,
      ice: 0.5,
      bug: 0.5,
      steel: 0.5,
      fairy: 0.5
    },
    weakness: {
      water: 2,
      ground: 2,
      rock: 2
    }
  },
  water: {
    name: 'water',
    resistance: {
      water: 0.5,
      fire: 0.5,
      ice: 0.5,
      steel: 0.5
    },
    weakness: {
      grass: 2,
      electric: 2
    }
  },
  grass: {
    name: 'grass',
    resistance: {
      grass: 0.5,
      ground: 0.5,
      water: 0.5,
      electric: 0.5
    },
    weakness: {
      fire: 2,
      bug: 2,
      ice: 2,
      flying: 2
    }
  },
  electric: {
    name: 'electric',
    resistance: {
      electric: 0.5,
      flying: 0.5,
      steel: 0.5
    },
    weakness: {
      ground: 2
    }
  },
  psychic: {
    name: 'psychic',
    resistance: {
      fighting: 0.5,
      psychic: 0.5
    },
    weakness: {
      bug: 2,
      ghost: 2,
      dark: 2
    }
  },
  ice: {
    name: 'ice',
    resistance: {
      ice: 0.5
    },
    weakness: {
      fighting: 2,
      steel: 2,
      fire: 2,
      rock: 2
    }
  },
  dragon: {
    name: 'dragon',
    resistance: {
      electric: 0.5,
      grass: 0.5,
      fire: 0.5,
      water: 0.5
    },
    weakness: {
      ice: 2,
      dragon: 2,
      fairy: 2
    }
  },
  dark: {
    name: 'dark',
    resistance: {
      psychic: 0,
      ghost: 0.5,
      dark: 0.5
    },
    weakness: {
      fighting: 2,
      fairy: 2,
      bug: 2
    }
  },
  fairy: {
    name: 'fairy',
    resistance: {
      fighting: 0.5,
      dark: 0.5,
      dragon: 0,
      bug: 0.5
    },
    weakness: {
      steel: 2,
      poison: 2
    }
  }
};

module.exports = {type};