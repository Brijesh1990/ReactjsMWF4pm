// pei chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

// bar chart


function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, "#b87333"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 530,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}