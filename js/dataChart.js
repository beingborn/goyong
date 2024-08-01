// Pie Chart 1
var pieChart1 = echarts.init(document.getElementById("pieChart1"));

// 크기에 맞게 줄어드는 함수 기본 eChart class에 width 100%로 넘어둠. 그리고 그걸 감싸는 chartWrapper는 inner에 width의 퍼센트를 참고 하고 있음
window.onresize = function () {
  pieChart1.resize();
  pieChart2.resize();
  pieChart3.resize();
  pieChart4.resize();
  barChart1.resize();
  barChart2.resize();
};
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
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
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
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
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
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
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
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
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
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#8ECCE2",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#91cc75",
          },
        },
      ],
      barWidth: "40%",
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
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#A4D594",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#F8C862",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart2.setOption(barOption2);
