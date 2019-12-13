<template>
    <b-container fluid class="spy-scroll">
        <b-row>
            <b-col cols="1.2">
                <!-- <b-list-group v-b-scrollspy:listgroup-ex> -->
                <b-list-group v-for="data in datas" :key="data.id" class="text-center">
                    <b-list-group-item :href="data[0]"  v-smooth-scroll="{ offset: -80}">{{ data[1] }}</b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import spyscrollContent from '@/assets/json/spyScroll.json'

export default {
    name: 'SpyScroll',
    data () {
        return {
            datas: []
        }
    },
    mounted () {
        var pathname = this.$router.history.current.path;
        var current = pathname.substring(11, pathname.length);
        this.datas = spyscrollContent[current];
        // console.log(this.datas, spyscrollContent[current])
    }
}
</script>