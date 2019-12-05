<template>
    <b-container fluid class="spy-scroll">
        <b-row>
            <b-col cols="1.2">
                <!-- <b-list-group v-b-scrollspy:listgroup-ex> -->
                <b-list-group>
                    <b-list-group-item href="#life-graph">인생 그래프</b-list-group-item>
                    <b-list-group-item href="#knowledge">보유 지식</b-list-group-item>
                    <b-list-group-item href="#technology">보유 기술</b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'SpyScroll',
    methods: {
        scrollTo (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>

</style>