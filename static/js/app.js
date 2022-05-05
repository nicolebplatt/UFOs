// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build data table
function buildTable(data) {
    // Clear any existing data
    tbody.html("");
    // loop through each object in the data
    // append a row and cells for each value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // loop through each row (field) in the dataRow and add each value as a table cell (td)
        // loop through each UFO sighting, put the values into dataRow, and we want one object per row
        // put each sighting into its own row in the table where val is each item in the object
        Object.values(dataRow).forEach((val) => {
            // append data into table data tag
            let cell = row.append("td");
            // extract only the text value from the object
            cell.text(val);
        });
    });
};

// Filter data
function handleClick() {
    // select first element that matches datetime string (datetime is selector string)
    // property will hold the information selected (value) in the date variable
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // set default filter as original data so users can create their own search
    // if no date is used for filter, full table will show
    let filteredData = tableData;
    // check if a date is selected, filter default table to just the date selected
    if (date) {
        // apply filter to table data to only keep row values that match the filtered datetime
        // row portion: show only the rows where the date is equal to the filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild table using filtered data - if no date entered, show complete data table
    buildTable(filteredData);
};

// Tell the code to 'listen' for a click then execute our function when the 'filter-btn' button is clicked
// selector string contains the id for the html tag
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table as soon as page loads
buildTable(tableData);