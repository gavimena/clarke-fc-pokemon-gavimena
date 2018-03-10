import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';

class App extends Component {
  constructor(props) {
    super(props);
    //TODO: Remove this when done!
    this.state = {
      pokemons : [{"url":"https://pokeapi.co/api/v2/pokemon/1/","name":"bulbasaur","id":1},{"url":"https://pokeapi.co/api/v2/pokemon/2/","name":"ivysaur","id":2},{"url":"https://pokeapi.co/api/v2/pokemon/3/","name":"venusaur","id":3},{"url":"https://pokeapi.co/api/v2/pokemon/4/","name":"charmander","id":4},{"url":"https://pokeapi.co/api/v2/pokemon/5/","name":"charmeleon","id":5},{"url":"https://pokeapi.co/api/v2/pokemon/6/","name":"charizard","id":6},{"url":"https://pokeapi.co/api/v2/pokemon/7/","name":"squirtle","id":7},{"url":"https://pokeapi.co/api/v2/pokemon/8/","name":"wartortle","id":8},{"url":"https://pokeapi.co/api/v2/pokemon/9/","name":"blastoise","id":9},{"url":"https://pokeapi.co/api/v2/pokemon/10/","name":"caterpie","id":10},{"url":"https://pokeapi.co/api/v2/pokemon/11/","name":"metapod","id":11},{"url":"https://pokeapi.co/api/v2/pokemon/12/","name":"butterfree","id":12},{"url":"https://pokeapi.co/api/v2/pokemon/13/","name":"weedle","id":13},{"url":"https://pokeapi.co/api/v2/pokemon/14/","name":"kakuna","id":14},{"url":"https://pokeapi.co/api/v2/pokemon/15/","name":"beedrill","id":15},{"url":"https://pokeapi.co/api/v2/pokemon/16/","name":"pidgey","id":16},{"url":"https://pokeapi.co/api/v2/pokemon/17/","name":"pidgeotto","id":17},{"url":"https://pokeapi.co/api/v2/pokemon/18/","name":"pidgeot","id":18},{"url":"https://pokeapi.co/api/v2/pokemon/19/","name":"rattata","id":19},{"url":"https://pokeapi.co/api/v2/pokemon/20/","name":"raticate","id":20},{"url":"https://pokeapi.co/api/v2/pokemon/21/","name":"spearow","id":21},{"url":"https://pokeapi.co/api/v2/pokemon/22/","name":"fearow","id":22},{"url":"https://pokeapi.co/api/v2/pokemon/23/","name":"ekans","id":23},{"url":"https://pokeapi.co/api/v2/pokemon/24/","name":"arbok","id":24},{"url":"https://pokeapi.co/api/v2/pokemon/25/","name":"pikachu","id":25}],
      selectedPokemon: {
    "forms": [
        {
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/",
            "name": "bulbasaur"
        }
    ],
    "abilities": [
        {
            "slot": 3,
            "is_hidden": true,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/34/",
                "name": "chlorophyll"
            }
        },
        {
            "slot": 1,
            "is_hidden": false,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/65/",
                "name": "overgrow"
            }
        }
    ],
    "stats": [
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/6/",
                "name": "speed"
            },
            "effort": 0,
            "base_stat": 45
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/5/",
                "name": "special-defense"
            },
            "effort": 0,
            "base_stat": 65
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/4/",
                "name": "special-attack"
            },
            "effort": 1,
            "base_stat": 65
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/3/",
                "name": "defense"
            },
            "effort": 0,
            "base_stat": 49
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/2/",
                "name": "attack"
            },
            "effort": 0,
            "base_stat": 49
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/1/",
                "name": "hp"
            },
            "effort": 0,
            "base_stat": 45
        }
    ],
    "name": "bulbasaur",
    "weight": 69,
    "moves": [
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/13/",
                "name": "razor-wind"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/14/",
                "name": "swords-dance"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/15/",
                "name": "cut"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/20/",
                "name": "bind"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 10,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 9,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/22/",
                "name": "vine-whip"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/29/",
                "name": "headbutt"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/33/",
                "name": "tackle"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/34/",
                "name": "body-slam"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/36/",
                "name": "take-down"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/38/",
                "name": "double-edge"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 4,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 3,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 1,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/45/",
                "name": "growl"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/70/",
                "name": "strength"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/72/",
                "name": "mega-drain"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 7,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/73/",
                "name": "leech-seed"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 34,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 34,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 32,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/74/",
                "name": "growth"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 27,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 19,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/75/",
                "name": "razor-leaf"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 46,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 48,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 48,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/76/",
                "name": "solar-beam"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 20,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/77/",
                "name": "poison-powder"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 41,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 41,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 15,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 13,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/79/",
                "name": "sleep-powder"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/80/",
                "name": "petal-dance"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/81/",
                "name": "string-shot"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/92/",
                "name": "toxic"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/99/",
                "name": "rage"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/102/",
                "name": "mimic"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/104/",
                "name": "double-team"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/111/",
                "name": "defense-curl"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/113/",
                "name": "light-screen"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/115/",
                "name": "reflect"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/117/",
                "name": "bide"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/124/",
                "name": "sludge"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/130/",
                "name": "skull-bash"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/133/",
                "name": "amnesia"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/148/",
                "name": "flash"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/156/",
                "name": "rest"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/2/",
                        "name": "yellow"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/1/",
                        "name": "red-blue"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/164/",
                "name": "substitute"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/173/",
                "name": "snore"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/174/",
                "name": "curse"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/182/",
                "name": "protect"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/188/",
                "name": "sludge-bomb"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/189/",
                "name": "mud-slap"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/202/",
                "name": "giga-drain"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/203/",
                "name": "endure"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/204/",
                "name": "charm"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/207/",
                "name": "swagger"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/210/",
                "name": "fury-cutter"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/213/",
                "name": "attract"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/214/",
                "name": "sleep-talk"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/216/",
                "name": "return"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/218/",
                "name": "frustration"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/219/",
                "name": "safeguard"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 25,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 21,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/230/",
                "name": "sweet-scent"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 39,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 33,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/235/",
                "name": "synthesis"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/237/",
                "name": "hidden-power"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/4/",
                        "name": "crystal"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/3/",
                        "name": "gold-silver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/241/",
                "name": "sunny-day"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/249/",
                "name": "rock-smash"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/263/",
                "name": "facade"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/267/",
                "name": "nature-power"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/275/",
                "name": "ingrain"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/282/",
                "name": "knock-off"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/290/",
                "name": "secret-power"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/320/",
                "name": "grass-whistle"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/12/",
                        "name": "colosseum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/13/",
                        "name": "xd"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/331/",
                "name": "bullet-seed"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/5/",
                        "name": "ruby-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/6/",
                        "name": "emerald"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/7/",
                        "name": "firered-leafgreen"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/345/",
                "name": "magical-leaf"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/363/",
                "name": "natural-gift"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 31,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/388/",
                "name": "worry-seed"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/",
                        "name": "level-up"
                    },
                    "level_learned_at": 37,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/402/",
                "name": "seed-bomb"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/412/",
                "name": "energy-ball"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/437/",
                "name": "leaf-storm"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/438/",
                "name": "power-whip"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/445/",
                "name": "captivate"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/10/",
                        "name": "heartgold-soulsilver"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/9/",
                        "name": "platinum"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/8/",
                        "name": "diamond-pearl"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/447/",
                "name": "grass-knot"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/474/",
                "name": "venoshock"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/496/",
                "name": "round"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/497/",
                "name": "echoed-voice"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/11/",
                        "name": "black-white"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/14/",
                        "name": "black-2-white-2"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/",
                        "name": "tutor"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/520/",
                "name": "grass-pledge"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/526/",
                "name": "work-up"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/",
                        "name": "egg"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/580/",
                "name": "grassy-terrain"
            }
        },
        {
            "version_group_details": [
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/17/",
                        "name": "sun-moon"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/16/",
                        "name": "omega-ruby-alpha-sapphire"
                    }
                },
                {
                    "move_learn_method": {
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/",
                        "name": "machine"
                    },
                    "level_learned_at": 0,
                    "version_group": {
                        "url": "https://pokeapi.co/api/v2/version-group/15/",
                        "name": "x-y"
                    }
                }
            ],
            "move": {
                "url": "https://pokeapi.co/api/v2/move/590/",
                "name": "confide"
            }
        }
    ],
    "sprites": {
        "back_female": null,
        "back_shiny_female": null,
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        "front_female": null,
        "front_shiny_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    },
    "held_items": [],
    "location_area_encounters": "/api/v2/pokemon/1/encounters",
    "height": 7,
    "is_default": true,
    "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
        "name": "bulbasaur"
    },
    "id": 1,
    "order": 1,
    "game_indices": [
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/22/",
                "name": "white-2"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/21/",
                "name": "black-2"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/18/",
                "name": "white"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/17/",
                "name": "black"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/16/",
                "name": "soulsilver"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/15/",
                "name": "heartgold"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/14/",
                "name": "platinum"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/13/",
                "name": "pearl"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/12/",
                "name": "diamond"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/11/",
                "name": "leafgreen"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/10/",
                "name": "firered"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/9/",
                "name": "emerald"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/8/",
                "name": "sapphire"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/7/",
                "name": "ruby"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/6/",
                "name": "crystal"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/5/",
                "name": "silver"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/4/",
                "name": "gold"
            },
            "game_index": 1
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/3/",
                "name": "yellow"
            },
            "game_index": 153
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/2/",
                "name": "blue"
            },
            "game_index": 153
        },
        {
            "version": {
                "url": "https://pokeapi.co/api/v2/version/1/",
                "name": "red"
            },
            "game_index": 153
        }
    ],
    "base_experience": 64,
    "types": [
        {
            "slot": 2,
            "type": {
                "url": "https://pokeapi.co/api/v2/type/4/",
                "name": "poison"
            }
        },
        {
            "slot": 1,
            "type": {
                "url": "https://pokeapi.co/api/v2/type/12/",
                "name": "grass"
            }
        }
    ]
}
    }
   this.requestServer = this.requestServer.bind(this);
 }
  //   this.state = {
  //     pokemons: []
  //   }
  //   this.getIdFromUrl = this.getIdFromUrl.bind(this);
  // }
  //
  // getIdFromUrl(url) {
  //   return url.split("/")[6] || 0;
  // }
  //
  //   componentDidMount() {
  //     console.log("componentDidMount");
  //     fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log("json", json);
  //       let pokemons = json.results.map(pokemon => {
  //         pokemon["id"] = this.getIdFromUrl(pokemon.url);
  //         return pokemon;
  //       })
  //       this.setState({
  //         pokemons: pokemons
  //       });
  //     });
  //   }

  // componentDidMount() {
  //   for (let i = 1; i <= 25; i++) {
  //     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  //     this.requestServer(url);
  //   }
  // }

  requestServer(pokemonId) {
    console.log('requestServer', pokemonId);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        selectedPokemon: json

      });
    });
  }


  //Get text from imput
	filter(event){
		this.setState({filter: event.target.value})
	}

  render() {
    let pokemons = this.state.pokemons;
		//Condition to filter by letter
		if(this.state.filter){
			pokemons = pokemons.filter( pokemon => pokemon.name.includes(this.state.filter.toLowerCase()))
      console.log(pokemons);

		}

    return (
      <div className="App">
        <header>
          <h1>Pokemons</h1>
          <input className="input" type="text" name="search" placeholder="Write a Pokemon's character" onChange={this.filter.bind(this)} />
        </header>
        <main>
          <PokemonList pokemons={pokemons}
                       selectedPokemon={this.state.selectedPokemon}
                       onMoreInfo={this.requestServer}/>
        </main>
      </div>
    );
  }
}

export default App;
