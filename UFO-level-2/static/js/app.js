// from data.js
var tableData = data;


// build table function

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

// create filter

var filter = {};

function createFilter() {
    var element = d3.select(this).select("input");
    var elementValue = element.property("value");
    var id = element.attr("id");
    if(element) {
        filter [id] = elementValue;
    }
    else {
        delete filter [id];
    }
    console.log(filter);
    filterTable();
}

// filter table results

function filterTable() {
    var filterData = tableData;
    Object.entries(filter).forEach(([key, value]) => {
        filterData = filterData.filter(rowData => rowData[key] == value);
        console.log(filterData);
    })
    buildTable(filterData);
}

d3.selectAll(".filter").on("change", createFilter);



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