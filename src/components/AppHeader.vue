<template>
    <b-navbar toggleable="sm" fixed="top" id="navbar">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand tag="h1" href="#">김혜진</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/portfolio/intro">이력소개</b-nav-item>
                <b-nav-item href="#">프로젝트</b-nav-item>
                <b-nav-item href="#">블로그</b-nav-item>
                <b-nav-item href="https://github.com/Karolline" target="_sub">깃허브</b-nav-item>
                <b-nav-item href="#">연락하기</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        // onScroll () {
        //     var scrollTop = document.documentElement.scrollTop;
        //     var navbar = document.getElementById("navbar");
        //     if(scrollTop !== 0) {
        //         navbar.classList.add('nav-lined');
        //     }
        //     else {
        //         navbar.classList.remove('nav-lined');
        //     }
        // }
    },
    // created () {
    //     window.addEventListener('scroll', this.onScroll);
    // },
    // destroyed () {
    //     window.removeEventListener('scroll', this.onScroll);
    // }
}
</script>