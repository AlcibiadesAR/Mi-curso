const fs = require ("fs");
const importar = (marca) => {
    let array = []
    for (i = 1; i <= 3; i++){
        array.push(JSON.parse(fs.readFileSync(`../figuras${i}.json`, "utf-8")))
    }
    for(let x of array){
        if(x.marca === marca){
            return x
        } 
    }
    return "No encontre la marca"
    
}

module.exports = importar





