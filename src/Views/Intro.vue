<template>
    <b-container class="content-div mt-5">
        <b-row class="text-center mt-5">
            <b-col><h3>인생 그래프</h3></b-col>
        </b-row>
        <b-row>
            <life-graph />
        </b-row>

        <b-row class="text-center mt-5 mb-5">
            <b-col><h3>보유 지식</h3></b-col>
        </b-row>
        <collapse />

        <b-row class="text-center mt-5 mb-5">
            <b-col><h3>보유 기술</h3></b-col>
        </b-row>
        <tech />
        
    </b-container>
</template>

<script>
import Collapse from '@/components/IntroCollapse.vue'
import LifeGraph from '@/components/IntroLifeGraph.vue'
import Tech from '@/components/IntroTech.vue'

export default {
    name: 'Intro',
    components: {
        Collapse, LifeGraph, Tech
    }
    
}
</script>