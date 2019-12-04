<template>
    <Plotly :data="data" :layout="layout" :displayModeBar="false"></Plotly>
    <!-- 반응형으로 만들기 -->
    <!-- 확대불가능하게 만들기 -->
</template>

<script>
import { Plotly } from 'vue-plotly'
import graphData from '@/assets/json/IntroLifeGraphData.json'

export default {
    name: 'IntroLifeGraph',
    components: {
        Plotly
    },
    data () {
        return {
            data: graphData.data,
            layout: graphData.layout
        }
    }
}
</script>