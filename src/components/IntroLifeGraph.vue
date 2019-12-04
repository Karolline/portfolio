<template>
    <Plotly :data="data" :layout="layout" :displayModeBar="false"></Plotly>
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