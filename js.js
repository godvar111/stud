let phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1343.529268', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
    '11.44.1643.52' ];
for (let i = 0; i < phones.length; i++){
    let a = phones[i].split('.');
    let aa = a[a.length - 1];
    a[a.length - 1] = aa[0] + '****';
    phones[i] = a.join('.');
}
console.log(phones)
let phoness = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'];
for (let j = 0; j< phoness.length; j++){
    let b = phoness[j].split(' ');
    phoness[j] = b[0] + '****' + b[3];
}
console.log(phoness)

let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
];
function getinfo(prices){
    for (let l = 0; l< prices.length; l++){
        let p = prices[l].split(' ')
        let pp;
        if (p[0] == 'Цена'){
            count++;
        }
        pp = p[p.length-1]
        if (pp[pp.length - 1] =='$'){
            countt++;
        }
    }
    return{
        count,
        countt
    }
}
let count =0 ;
let countt= 0;
console.log(getinfo(prices))

function kingSayd(string){
    if (string.startsWith('Король скаал')){
        console.log(string)
    }else{
        console.log('Король сказал: ' + string)
    }
}
console.log(kingSayd('Сегодня хорошая погода'))

function  iIstFridayToday(){
    today = new Date();
    day = today.getDay();
    if (day == 5 ){
        console.log('сегодня пятница');
    }else if (day == 6){
        console.log('пятница была вчера');
    }else if (day == 4){
        console.log('пятница будет завтра');
    } else if (day == 0){
        console.log('пятница через 5 дней');
    } else if (day == 1){
        console.log('пятница через 4 дня');
    } else if (day == 2){
        console.log('пятница через 3 дня');
    } else if (day == 3){
        console.log('пятница через 2 дня');
    } 
}
iIstFridayToday();