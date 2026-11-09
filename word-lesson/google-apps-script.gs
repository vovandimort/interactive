// Google Apps Script: приймає результати з уроку й додає рядок у таблицю.
// Вставити в Розширення → Apps Script у вашій Google-таблиці.
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Час отримання','Учень','Клас','Дата у браузері','Бал','З','Оцінка (12)','Завдань виконано','Код','Повний звіт']);
    sh.setFrozenRows(1);
  }
  sh.appendRow([new Date(), d.name, d.cls, d.date, d.score, d.total, d.grade, d.tasksDone, d.code, d.report]);
  return ContentService.createTextOutput('ok');
}
