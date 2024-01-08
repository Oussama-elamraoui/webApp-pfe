import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { ResponsiveRadar } from '@nivo/radar'
import background from './background.json'
const data=[
  {
    "taste": "fruity",
    "chardonay": 117,
    "carmenere": 119,
    "syrah": 100
  },
  {
    "taste": "bitter",
    "chardonay": 61,
    "carmenere": 99,
    "syrah": 29
  },
  {
    "taste": "heavy",
    "chardonay": 53,
    "carmenere": 86,
    "syrah": 90
  },
  {
    "taste": "strong",
    "chardonay": 69,
    "carmenere": 56,
    "syrah": 50
  },
  {
    "taste": "sunny",
    "chardonay": 108,
    "carmenere": 67,
    "syrah": 106
  }
];
class RadarChart extends React.Component {

     
    render() {
      return (
        

        <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
      
        dotBorderWidth={2}
        colors={{ scheme: 'purple_orange' }}
        blendMode="multiply"
        motionConfig="wobbly"
        theme={{
          "background": "#050629",
          "text": {
              "fontSize": 11,
              "fill": "#ffffff",
              "outlineWidth": 0,
              "outlineColor": "#030303"
          },
          "axis": {
              "domain": {
                  "line": {
                      "stroke": "#8b8989",
                      "strokeWidth": 1 
                  }
              },
              "legend": {
                  "text": {
                      "fontSize": 12,
                      "fill": "#a39f9f",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": "#777777",
                      "strokeWidth": 1
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": "#6f6d6d",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": "#cec0c0",
                  "strokeWidth": 1
              }
          },
          "legends": {
              "title": {
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "text": {
                  "fontSize": 11,
                  "fill": "#a08d8d",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              },
              "ticks": {
                  "line": {},
                  "text": {
                      "fontSize": 10,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "annotations": {
              "text": {
                  "fontSize": 13,
                  "fill": "#333333",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              }
          },
          "tooltip": {
              "container": {
                  "background": "#0e001f",
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
      }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                        
                    }
                ]
            }
        ]}
    />


      );
    }
  }

export default RadarChart;