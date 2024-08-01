// Pie Chart 1
var pieChart1 = echarts.init(document.getElementById("pieChart1"));
var pieOption1 = {
  chart__title: {
    text: "Pie Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
pieChart1.setOption(pieOption1);

// Pie Chart 2
var pieChart2 = echarts.init(document.getElementById("pieChart2"));
var pieOption2 = {
  chart__title: {
    text: "Pie Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
pieChart2.setOption(pieOption2);

// Pie Chart 3
var pieChart3 = echarts.init(document.getElementById("pieChart3"));
var pieOption3 = {
  chart__title: {
    text: "Pie Chart 3",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
pieChart3.setOption(pieOption3);

// Pie Chart 4
var pieChart4 = echarts.init(document.getElementById("pieChart4"));
var pieOption4 = {
  chart__title: {
    text: "Pie Chart 4",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
pieChart4.setOption(pieOption4);

// Bar Chart 1
var barChart1 = echarts.init(document.getElementById("barChart1"));
var barOption1 = {
  chart__title: {
    text: "Bar Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [120, 200, 150, 80, 70, 110, 130],
    },
  ],
};
barChart1.setOption(barOption1);

// Bar Chart 2
var barChart2 = echarts.init(document.getElementById("barChart2"));
var barOption2 = {
  chart__title: {
    text: "Bar Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [120, 200, 150, 80, 70, 110, 130],
    },
  ],
};
barChart2.setOption(barOption2);
