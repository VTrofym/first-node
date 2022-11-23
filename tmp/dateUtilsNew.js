//создали Функцию
function getCurrentDate() {
  return Date.now();
}
// И экспортируем ее
module.exports = {
  getCurrentDate,
};

//global лучше не пользоваться
global.testData = "123";
// console.log(global.testData);
