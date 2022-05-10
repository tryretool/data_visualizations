var data = [{
    type: 'funnelarea', 
    scalegroup: "first", 
    values: [500, 450, 340, 230, 220, 110],
    textinfo: "value", 
    title: {position: "top center", text: "Sales for Sale Person A in U.S."},
    domain: {x: [0, 0.5], y: [0, 0.5]}
  },
  {
    type: 'funnelarea', scalegroup: "first", 
    values: [600, 500, 400, 300, 200, 100], 
    textinfo: "value",
    title: {position: "top center", text: "Sales of Sale Person B in Canada"},
    domain: {x: [0, 0.5], y: [0.55, 1]}},
  {
    type:'funnelarea', 
    scalegroup: "second", 
    values: [510, 480, 440, 330, 220, 100], textinfo: "value",
    title: {position: "top left", text: "Sales of Sale Person A in Canada"},
    domain: {x: [0.55, 1], y: [0, 0.5]}},
  {
    type: 'funnelarea', scalegroup: "second", 
    values: [360, 250, 240, 130, 120, 60],
    textinfo: "value", title: {position: "top left", text: "Sales of Sale Person B in U.S."},
    domain: {x: [0.55, 1], y: [0.55, 1]}
  }];
   
  return data;