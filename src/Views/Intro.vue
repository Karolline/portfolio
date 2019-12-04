<template>
    <b-container class="content-div mt-5">
        <!-- 작은 내비게이션바 만들어서 특정 div로 이동시키기 할까? -->
        <b-row class="text-center mt-5 mb-2">
            <b-col><h3>인생 그래프</h3></b-col>
        </b-row>
        <b-row>
            <life-graph style="margin: 0 auto" />
        </b-row>
        <b-row class="text-center">
            <b-col><a href="#">내 인생 그래프 만들어보기</a></b-col>
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

<style scoped>

</style>