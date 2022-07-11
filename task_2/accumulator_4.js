let names = ['Адам', 'Альви','Сулейман', 'Джабраил','Мовсар','Исмаил','Зелим']

let accumulator = []

for(let i = 0; i < names.length; i++){
    if(names[i].startsWith('А')) {
        accumulator.push(names[i])
    }
}

console.log(accumulator)