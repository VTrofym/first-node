const path = require("path");

// передаем относительный путь, а получаем абсолютный
console.log(path.resolve("dateUtils"));

const qwe = path.resolve("./qwe");
const qwe1 = "./qwe";
// абсолютный путь
console.log("qwe>> ", qwe);

//относительный путь
console.log("qwe1 :>> ", qwe1);
