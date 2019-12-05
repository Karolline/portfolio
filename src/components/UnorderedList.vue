<template>
    <ul class="list-unstyled">
        <b-media tag="li" v-for="content in contents" :key="content.id" >
            <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-1">{{ content.title }}</h5>
            <p class="mb-0">
                {{ content.body }}
            </p>
        </b-media>
    </ul>
</template>

<script>
export default {
    name: 'UnorderedList',
    props: {
        contents: {
            type: Array
        }
    }
}
</script>
