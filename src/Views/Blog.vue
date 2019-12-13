<template>
    <div>
        <!-- <blog-carousel /> -->
        <blog-card-list />
    </div>
</template>

<script>
import BlogCarousel from '@/components/BlogCarousel'
import BlogCardList from '@/components/BlogCardList'

export default {
    name: 'Blog',
    components: {
        BlogCarousel, BlogCardList
    }
}
</script>