<template>
    <b-container class="content-div mt-5">
        <b-row class="text-center">
            <b-col>
                <img src="@/assets/images/browser.svg" v-b-toggle="'browser-content'">
                <!-- hover 만들기 -->
            </b-col>
            <b-col>
                <img src="@/assets/images/big-data.svg" v-b-toggle="'big-data-content'">
            </b-col>
            <b-col>
                <img src="@/assets/images/artificial-intelligence.svg" v-b-toggle="'ai-content'">
            </b-col>
        </b-row>
        <b-row class="text-center mt-2">
            <b-col>
                text1
            </b-col>
            <b-col>
                text2
            </b-col>
            <b-col>
                text3
            </b-col>
        </b-row>
         <b-row class="text-center mt-5">
            <b-col>
                <b-collapse id="browser-content" accordion="intro-accordion" visible>
                    text about browser
                    내용조금만쓰기
                    <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. -->
                </b-collapse>
                <b-collapse id="big-data-content" accordion="intro-accordion">
                    text about big data
                    내용조금만쓰기
                    <!-- Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. -->
                </b-collapse>
                <b-collapse id="ai-content" accordion="intro-accordion">
                    text about artificial intelligence
                    내용조금만쓰기
                    <!-- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). -->
                </b-collapse>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <Plotly :data="data" :layout="layout" :displayModeBar="false"></Plotly>
        </b-row>
    </b-container>
</template>

<script>
import { Plotly } from 'vue-plotly'
export default {
    name: 'Intro',
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
                    // text: ['17`07', '18`06', '09', '19`02', '04', '20`01'],
                    
                ]  
            }
        }
    },
    methods: {
        getDate(year, month, day) {
            return new Date(year, month, day).getTime();
        }
    }
    
}
</script>