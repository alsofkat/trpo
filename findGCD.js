function findGCD(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  const X = 66;
  const Y = 122;
  const result = findGCD(X, Y);

  const fs = require('fs');
  
  fs.writeFile('result.txt', `Наибольший общий делитель для ${X} и ${Y} равен ${result}`, (err) => {
    if (err) throw err;
    console.log('Результат записан в файл result.txt');
  });
  
