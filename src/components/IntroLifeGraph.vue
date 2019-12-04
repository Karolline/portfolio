<template>
    <Plotly :data="data" :layout="layout" :displayModeBar="false"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
    name: 'IntroLifeGraph',
    components: {
        Plotly
    },
    data () {
        return {
            data: [
                {   name: '',
                    x: ['2017-07-24', '2018-06-27', '2018-09-10', '2019-02-10', '2019-04-01', '2020-01-01'],
                    y: [0, 0, 0, 0, 0, 0],
                    // text: ['17`07', '18`06', '09', '19`02', '04', '20`01'],
                    text: ['설명을길게길게쓴다', '설명을길게길게쓴다', '설명을길게길게쓴다', '설명을길게길게쓴다', '설명을길게길게쓴다', '설명을길게길게쓴다'],
                    mode: 'lines+markers',
                    textposition: "bottom center",
                    type: "scatter",
                    hovertemplate: ["코리아세븐 입사", "코리아세븐 퇴사", "인공지능 개발자 양성과정 입과", "인공지능 개발자 양성과정 수료", "씨에스리 입사", "재직중"],
                    marker: {
                        symbol: "star-diamond-dot",
                        size: [10, 10, 10, 10, 10, 10],
                        color: 'rgb(247, 170, 166'
                    },
                    line: {
                        color: 'rgb(224, 205, 235)',
                        width: 3
                    }
                    // hoverinfo: "text",
                }
            ],
            layout: {
                title: "My graph",
                width: 1200,
                height: 600,
                paper_bgcolor: 'rgba(255, 255, 255, 0)',
                plot_bgcolor: 'rgba(255, 255, 255, 0.2)',
                xaxis: {
                    visible: false,
                    // showgrid: false,
                    position: 0.1,
                    range: [new Date(2017, 5, 1).getTime() , new Date(2020, 2, 1).getTime()]
                },
                yaxis: {
                    visible: false,
                    range: [-0.5, 2]
                },
                annotations: [
                    { x: '2017-07-24', y:-0.1, xref: 'x', yref: 'y', text: '17`07', showarrow: false},
                    { x: '2018-06-20', y:-0.1, xref: 'x', yref: 'y', text: '18`06', showarrow: false},
                    { x: '2018-09-10', y:-0.1, xref: 'x', yref: 'y', text: '18`09', showarrow: false},
                    { x: '2019-01-31', y:-0.1, xref: 'x', yref: 'y', text: '19`02', showarrow: false},
                    { x: '2019-04-15', y:-0.1, xref: 'x', yref: 'y', text: '19`04', showarrow: false},
                    { x: '2020-01-01', y:-0.1, xref: 'x', yref: 'y', text: '20`01', showarrow: false} 
                ] ,
                hoverdistance: -1,
                hoverlabel: {
                    font: {
                        size: 16
                    }
                }
            }
        }
    }
}
</script>