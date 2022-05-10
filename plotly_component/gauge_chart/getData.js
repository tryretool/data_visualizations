const gauge = [
    {
      type: "indicator",
      mode: "gauge+number+delta",
      value: {{randomGaugeValue.data}},
      title: { text: "Speed", font: { size: 20 } },
      delta: { reference: 400, increasing: { color: "green" } },
      gauge: {
        axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 200], color: "cyan" },
          { range: [200, 400], color: "royalblue" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490
        }
      }
    }
  ];
  
  return gauge;