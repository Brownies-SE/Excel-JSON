const xlsx = require("xlsx");

const workbook = xlsx.readFile("Table4_AcreageInNewLeasesIssued_2020.xlsx", {
  cellDates: true,
});
const worksheet = workbook.Sheets["Table 4 Acreage in New Leases "];

const data = xlsx.utils.sheet_to_json(worksheet);

//console.log(data);

const newWorkBook = xlsx.utils.book_new();
const newWorkSheet = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, "New Data");

xlsx.writeFile(newWorkBook, "New Data File.xlsx");
