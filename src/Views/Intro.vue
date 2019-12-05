<template>
    <b-container class="content-div mt-5">
        <spy-scroll />
        <!-- 작은 내비게이션바 만들어서 특정 div로 이동시키기 할까? -->
        <b-row id="life-graph" class="text-center mt-5 mb-2">
            <b-col><h3>인생 그래프</h3></b-col>
        </b-row>
        <b-row>
            <life-graph style="margin: 0 auto" />
        </b-row>
        <b-row class="text-center">
            <b-col><a href="#">내 인생 그래프 만들어보기</a></b-col>
        </b-row>

        <b-row id="knowledge" class="text-center mt-5 mb-5">
            <b-col><h3>보유 지식</h3></b-col>
        </b-row>
        <collapse />
        <!-- 혁신성장 동영상 삽입하기 -->

        <b-row id="technology" class="text-center mt-5 mb-5">
            <b-col><h3>보유 기술</h3></b-col>
        </b-row>
        <tech />
        
    </b-container>

    
</template>

<script>
import Collapse from '@/components/IntroCollapse'
import LifeGraph from '@/components/IntroLifeGraph'
import Tech from '@/components/IntroTech'
import SpyScroll from '@/components/SpyScroll'

export default {
    name: 'Intro',
    components: {
        Collapse, LifeGraph, Tech, SpyScroll
    }
    
}
</script>

<style scoped>

</style>