const importar = require("./collectibles.js")
let hottoys = importar("Hot Toys");
let bandai = importar("Bandai");
let starwars = importar("Star Wars");

let unifiedCollectibles = [{...hottoys}, {...bandai}, {...starwars}]

let dhCollectibles = {figuras: unifiedCollectibles,
    listFigures: function(){
            return this.figuras
    },
    figuresByBrand: function(marca){
        return this.figuras.filter((e) => e.marca === marca)
    }
}

console.log(dhCollectibles.figuresByBrand("Star Wars"));
console.log(dhCollectibles.listFigures("Bandai"));



