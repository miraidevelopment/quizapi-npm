const fetch = require('node-fetch')

module.exports = async (category, id) => {

    if(!category) throw new Error("Insira a categoria!");
    if(!id) throw new Error("Insira o número da questão!");
    
    let c = category;
    let d = id;

    if(category === "random") c = random_item(["entretenimento", "esportes", "historia"])
    if(id === "random") d = getRandomInt(1, 10)

    let data = await fetch(`https://www.quizapi.site/api/${c}/${d}`)
        data = await data.json()

    if(data.err) throw new RangeError(data.message)

    return data

}

function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}