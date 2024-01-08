import React, { Component } from "react";
import { ResponsivePie } from '@nivo/pie'
const dat=[
    {
      "id": "Tr1(00h->02h)",
      "label": "00h->02h",
      "value": 2103,
      "color": "hsl(262, 70%, 50%)"
    },
    {
      "id": "Tr2(02h->04h)",
      "label": "02h->04h",
      "value": 1224,
      "color": "hsl(228, 70%, 50%)"
    },
    {
      "id": "Tr3(04h->06h)",
      "label": "04h->06h",
      "value": 1363,
      "color": "hsl(208, 70%, 50%)"
    },
    {
      "id": "Tr4(06h->08h)",
      "label": "06h->08h",
      "value": 5566,
      "color": "hsl(79, 70%, 50%)"
    },
    {
      "id": "Tr5(08h->10h)",
      "label": "08h->10h",
      "value": 9184,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr6(10h->12h)",
      "label": "10h->12h",
      "value": 8985,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr7(12h->14h)",
      "label": "12h->14h",
      "value": 11136,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr8(14h->16h)",
      "label": "14h->16h",
      "value": 13606,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr9(16h->18h)",
      "label": "16h->18h",
      "value": 15194,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr10(18h->20h)",
      "label": "18h->20h",
      "value": 11666,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr11(20h->22h)",
      "label": "20h->22h",
      "value": 6821,
      "color": "hsl(5, 70%, 50%)"
    },
    {
      "id": "Tr12(22h->00h)",
      "label": "22h->00h",
      "value": 4351,
      "color": "hsl(5, 70%, 50%)"
    }
  ]
class PieChart extends React.Component {

     render(){
      return (
        <ResponsivePie
        data={dat}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
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
                        "fontSize": 2,
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


    />
      )}}
export default PieChart; 