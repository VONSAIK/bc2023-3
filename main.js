const fs = require('fs');

function обробитиПомилку(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Дані успішно записані в output.txt');
  }
}

fs.readFile('data.json', (err, data) => {
  if (err) {
    return console.error('Помилка читання файлу data.json:', err);
  }

  try {
    const jsonData = JSON.parse(data);

    const outputData = jsonData.map((item) => {
      const { StockCode, ValCode, Attraction } = item;
      return `${StockCode}-${ValCode}-${Attraction}`;
    }).join('\n');

    fs.writeFile('output.txt', outputData, обробитиПомилку);
  } catch (parseError) {
    console.error('Помилка розбору JSON:', parseError);
  }
});
