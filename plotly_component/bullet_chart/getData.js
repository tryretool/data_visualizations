const satisfactionValue = ({{textInput1.value}} != "" ? parseInt({{textInput1.value}}) : 260)
const profitValue = ({{textInput2.value}} != "" ? parseInt({{textInput2.value}}) : 40)
const revenueValue = ({{textInput3.value}} != "" ? parseInt({{textInput3.value}}) : 180)

var data = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: revenueValue,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.08, 0.25] },
    title: { text: "Revenue" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 170
      },
      steps: [
        { range: [0, 150], color: "gray" },
        {
          range: [150, 250],
          color: "lightgray"
        }
      ],
      bar: { color: "black" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: profitValue,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: "Profit" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 50
      },
      steps: [
        { range: [0, 25], color: "gray" },
        { range: [25, 75], color: "lightgray" }
      ],
      bar: { color: "black" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: satisfactionValue,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.7, 0.9] },
    title: { text: "Satisfaction" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 210
      },
      steps: [
        { range: [0, 150], color: "gray" },
        { range: [150, 250], color: "lightgray" }
      ],
      bar: { color: "black" }
    }
  }
];

return data