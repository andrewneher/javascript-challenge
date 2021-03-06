// from data.js
var tableData = data;



// build table

function buildTable(data) {
    var tableBody = d3.select("tbody");
    tableBody.html("");
    data.forEach((rowData) => {
        var row = tableBody.append("tr");
        Object.values(rowData).forEach((value) => {
            var cells = row.append("td");
            cells.text(value);
        });
    });
}

buildTable(tableData);



// return filtered datetime

function clickButton() {
    var dateTime = d3.select("#datetime").property("value");
    var filterData = tableData;
    filterData = filterData.filter(dataRow => dataRow.datetime === dateTime);
    buildTable(filterData);

}

// on click

d3.selectAll("#filter-btn").on("click", clickButton);








// // TABLE COLUMN ELEMENTS

// // datetime
// var datetime = data.map(data =>  data.datetime);
// console.log(datetime)

// // city
// var city = data.map(data =>  data.city);
// console.log(city)

// // state
// var state = data.map(data =>  data.state);
// console.log(state)

// // country
// var country = data.map(data =>  data.country);
// console.log(country)

// // shape
// var shape = data.map(data =>  data.shape);
// console.log(shape)

// // durationMinutes
// var durationMinutes = data.map(data =>  data.durationMinutes);
// console.log(durationMinutes)

// // comments
// var comments = data.map(data =>  data.comments);
// console.log(comments)