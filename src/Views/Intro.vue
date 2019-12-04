<template>
    <b-container class="content-div mt-5">
        <collapse />
        <b-row class="mt-5">
            <life-graph />
        </b-row>
    </b-container>
</template>

<script>
import Collapse from '@/components/IntroCollapse.vue'
import LifeGraph from '@/components/IntroLifeGraph.vue'

export default {
    name: 'Intro',
    components: {
        Collapse, LifeGraph
    }
    
}
</script>