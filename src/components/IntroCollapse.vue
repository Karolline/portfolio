<template>
    <div>
        <b-row class="text-center">
            <b-col>
                <img src="@/assets/images/browser.svg" v-b-toggle="'browser-content'">
                <!-- hover 만들기 -->
            </b-col>
            <b-col>
                <img src="@/assets/images/big-data.svg" v-b-toggle="'big-data-content'">
            </b-col>
            <b-col>
                <img src="@/assets/images/artificial-intelligence.svg" v-b-toggle="'ai-content'">
            </b-col>
        </b-row>
        <b-row class="text-center mt-2">
            <b-col>
                웹 개발
            </b-col>
            <b-col>
                빅데이터
            </b-col>
            <b-col>
                인공지능
            </b-col>
        </b-row>
         <b-row class="text-center mt-5 mb-5">
            <b-col>
                <b-collapse id="browser-content" accordion="intro-accordion" visible>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. -->
                </b-collapse>
                <b-collapse id="big-data-content" accordion="intro-accordion">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <!-- Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. -->
                </b-collapse>
                <b-collapse id="ai-content" accordion="intro-accordion">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <!-- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). -->
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
.collapse {
    width: 50%;
    margin: 0 auto;
    padding: 60px 30px 60px 30px;
}
.collapsing {
    width: 50%;
    margin: 0 auto;
    padding: 60px 30px 60px 30px;
}
/* collpase 말고 tab을 고려해보자 */
</style>