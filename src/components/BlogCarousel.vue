<template>
    <div>
        <b-carousel id="blog-carousel"
                    v-model="slide"
                    :interval="6000"
                    controls
                    indicators
                    background="#fff"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

            <b-carousel-slide caption="first caption"
                                text="first text"
                                img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <b-carousel-slide caption="second caption"
                                text="second text"
                                img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'BlogCarousel',
    data () {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true;
        },
        onSlideEnd (slide) {
            this.sliding = false;
        }
    }
}
</script>