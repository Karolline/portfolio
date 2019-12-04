<template>
    <div>
        <!-- <b-card>
            <b-media no-body>
            <b-media-aside vertical-align="center">
                <b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
            </b-media-aside>

            <b-media-body class="ml-3">
                <h5 class="mt-0">대분류</h5>
                <p class="mb-0">
                한 줄 설명
                </p>

                <b-media>
                <template v-slot:aside>
                    <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                </template>
                <h5 class="mt-0">중분류</h5>
                쏼라쏼라
                </b-media>
            </b-media-body>
            </b-media>
        </b-card> -->
         <ul class="list-unstyled">
            <b-media tag="li">
            <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-1">List-based media object</h5>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            </b-media>

            <b-media tag="li" class="my-4">
            <template v-slot:aside>
            <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-1">List-based media object</h5>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            </b-media>

            <b-media tag="li">
            <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-1">List-based media object</h5>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            </b-media>
        </ul>
    </div>
</template>

<style scoped>
.card-body {
    
}
</style>