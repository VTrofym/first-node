// подключение библиотеки fs и асинхронно прочитали файд data.txt
const fs = require("fs").promises;
const path = require("path");

//"utf8" это кодировка нужна обязательно иначе вернется буфер
const data = fs
  .readFile(path.resolve("./data.txt"), "utf8")
  .then((data1) => {
    console.log("data1 :>> ", data1);
  })
  .catch((error) => console.error);
console.log(123456);

// аналогичная запись
(async () => {
  const data2 = await fs.readFile(path.resolve("./data.txt"), "utf8");
  console.log("data2 :>> ", data2);
})();

// одполнительно обернули в try-catch
(async () => {
  try {
    const data3 = await fs.readFile(path.resolve("./data.txt"), "utf8");
    console.log("data3 :>> ", data3);
  } catch (err) {
    console.error(err);
  }
})();

// добавляем запись в файл writeFile
// rename - переименовывает и перемещает
(async () => {
  try {
    const data4 = await fs.readFile(path.resolve("./data.txt"), "utf8");
    console.log("data4 :>> ", data4);

    const newContent = `${data4} school wethegrfrgf`;
    await fs.writeFile("./data1.txt", newContent, "utf8");

    // одбавление в файл данных - альтернативный вариант
    // fs.appendFile("./data1.txt", "newContent", "utf-8");

    // переименование файла
    // await fs.rename("./dateUtils.js", "./dateUtilsNew.js");
    // перемещение файла
    // await fs.rename("./dateUtilsNew.js", "./tmp/dateUtilsNew.js");

    // почитать - что есть в папке
    // console.log(await fs.readdir("./tmp"));

    // удаление файла
    // await fs.unlink("./onDelete1.js");
  } catch (err) {
    console.error(err);
  }
})();
