# Data Visualizations

Examples of what can be achieved through either:
- Configuring a Chart component with Plotly JSON
- Using a custom component

NOTES: 
1. This repo is intended for examples that can be configured entirely within the Retool IDE. It does not include custom components with a complete web bundling process to generate a single js file.
2. Because the JSON may include inline JS, it does not necessarily conform to the JSON spec
3. Because this content is taken straight from the Retool IDE, data and layout javascript objects may not conform to the JSON spec (e.g. unquoted keys)

## Configuring a Chart using Plotly.js

Each configuration here contains a screencap of the visualization, and files containing JSON values that can be used

Not all files are present for every vis, but where available they should be used as follows:

- data.json: add to the Data field in the Chart component (after selecting the Plotly JSON option)
- layout.json: add to the Layout field in the Chart component (after selecting the Plotly JSON option)
- temp_state.json: create a temp variable to hold this value

NOTE: if a temp_state.json file is provided, you will need to inspect data.json or layout.json to validate the correct name for the temp variable.

![Configuring The Chart Component](docs/configuring_a_plotly_chart.png)

## Plotly.js configurations

[Bubble Chart](plotly_component/bubble_chart/)

![Bubble Chart](plotly_component/bubble_chart/bubble_chart.png)
___

[Bubble Chart 2](plotly_component/bubble_chart_2/)

![Bubble Chart 2](plotly_component/bubble_chart_2/bubble_chart_2.png)
___
[Double Y Axis](plotly_component/double_y_axis/)

![Double Y Axis](plotly_component/double_y_axis/double_y_axis.png)
___
[Exploded Pie Chart](plotly_component/exploded_pie_chart/)

![Exploded Pie Chart](plotly_component/exploded_pie_chart/exploded_pie_chart.png)
___
[Funnel Chart](plotly_component/funnel_chart/)

![Funnel Chart](plotly_component/funnel_chart/funnel_chart.png)
___
[Line Chart](plotly_component/line_chart/)

![Line Chart](plotly_component/line_chart/line_chart.png)
___
[Sankey Diagram](plotly_component/sankey_diagram/)

![Sankey Diagram](plotly_component/sankey_diagram/plotly_sankey_diagram.gif)
___
[Scatter Geo](plotly_component/scattergeo/)

![Scatter Geo](plotly_component/scattergeo/scattergeo.png)
___
[Stacked Bar Chart](plotly_component/stacked_bar_chart/)

![Stacked Bar Chart](plotly_component/stacked_bar_chart/stacked_bar_chart.png)
___
[Ternary Chart](plotly_component/ternary_chart/)

![Ternary Chart](plotly_component/ternary_chart/ternary_chart.png)
___
[Waterfall Chart](plotly_component/waterfall_chart/)

![Waterfall Chart](plotly_component/waterfall_chart/waterfall_chart.png)
___

## Custom Components

[Sankey Chart](custom_component/sankey_chart/)
![Sankey Chart](custom_component/sankey_chart/sankey_chart.png)
___
[Tree Diagram](custom_component/tree_diagram/)
![Tree Diagram](custom_component/tree_diagram/tree_diagram.png)
