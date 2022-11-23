// подключение библиотеки для работы с калькуялятором
const Calc = require("calc-js").Calc;

// process.argv содержит в себе: 1 путь к ноде, 2 путь к файлу и дальше то что мы укажем в параметре в терминале
console.log(process.argv);

// const a = process.argv[2];
// const b = process.argv[3];
//аналогичная запись

const [, , a, b] = process.argv;
//node calculator 1 2 вводим в терминал parseInt целое число
console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

//node calculator 0.1 0.2 вводим в терминал parseFloat число с плавающей запятой
console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish());
