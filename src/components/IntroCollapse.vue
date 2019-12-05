<template>
    <div id="intro-collapse">
        <b-row class="text-center">
            <b-col>
                <img src="@/assets/images/browser.svg" v-b-toggle="'browser-content'">
                <!-- hover 만들기 -->
            </b-col>
            <!-- <b-col>
                <img src="@/assets/images/big-data.svg" v-b-toggle="'big-data-content'">
            </b-col> -->
            <b-col>
                <img src="@/assets/images/artificial-intelligence.svg" v-b-toggle="'bigdata-ai-content'">
            </b-col>
        </b-row>
        <b-row class="text-center mt-2">
            <b-col>
                웹 개발
            </b-col>
            <b-col>
                빅데이터, AI
            </b-col>
        </b-row>
         <b-row class="text-center mt-5 mb-5">
            <b-col>
                <b-collapse class="collpase-content" id="browser-content" accordion="intro-accordion" visible>
                    <div class="content-div">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. -->
                    </div>
                </b-collapse>

                <b-collapse class="collpase-content" id="bigdata-ai-content" accordion="intro-accordion">
                    <div class="content-div">
                        뭐라뭐라 설명 쏼라쏼라
                        <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/VRvAHVvMzwM"
                        ></b-embed>
                    </div>
                </b-collapse>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'IntroCollapse'
}
</script>

<style scoped>
#intro-collapse {
    width: 80%;
    margin: 0 auto;
    /* padding: 60px 30px 60px 30px; */
}

.content-div img { /* 어디에 먹인거지 */
    width: 100px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2em;
    padding: 20px 20px 20px 20px;
}

.collpase-content {
    padding-left: 20px;
}

.content-div {
    /* width: 70%; */
    margin: 0 auto; 
}


/* .collapsing {
    width: 50%;
    margin: 0 auto;
    padding: 60px 30px 60px 30px;
} */
/* collpase 말고 tab을 고려해보자 */
</style>