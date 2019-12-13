<template>
    <b-container>
        <b-row id="company" class="text-center mt-5 mb-2">
            <b-col><h3>회사 프로젝트</h3></b-col>
        </b-row>
        <b-row class="text-center mb-2">
            <b-col v-for="data in companyDatas" :key="data.id">
                <button @click="onCompanyClick(data.index)">{{ data.title }}</button>
                </b-col>
        </b-row>
        <b-row>
            <b-carousel id="company-projects"
                        style="text-shadow: 0px 0px 2px #000"
                        fade
                        indicators
                        img-width="1024"
                        img-height="480"
                        ref="company">
                <b-carousel-slide v-for="data in companyDatas" :key="data.id"
                        :caption="data.title"
                        :text="data.content"
                        :img-src="data.img"
                    ></b-carousel-slide>
            </b-carousel>
        </b-row>

        <b-row id="personal" class="text-center mt-5 mb-2">
            <b-col><h3>개인 프로젝트</h3></b-col>
        </b-row>
        <b-row class="text-center mb-2">
            <b-col v-for="data in personalDatas" :key="data.id">
                <button @click="onPersonalClick(data.index)">{{ data.title }}</button>
                </b-col>
        </b-row>
        <b-row>
            <b-carousel id="personal-projects"
                        style="text-shadow: 0px 0px 2px #000"
                        fade
                        indicators
                        img-width="1024"
                        img-height="480"
                        ref="personal">
                <b-carousel-slide v-for="data in personalDatas" :key="data.id"
                        :caption="data.title"
                        :text="data.content"
                        :img-src="data.img"
                    ></b-carousel-slide>
            </b-carousel>
        </b-row>
    </b-container>
</template>

<script>
import carouselData from '@/assets/json/ProjectsCarouselData'

export default {
    name: 'Projects',
    data () {
        return {
            companyDatas: carouselData.company,
            personalDatas: carouselData.personal
        }
    },
    methods: {
        onCompanyClick (index) {
            this.$refs.company.setSlide(index);
        },
        onPersonalClick (index) {
            this.$refs.personal.setSlide(index);
        }
    }
}
</script>