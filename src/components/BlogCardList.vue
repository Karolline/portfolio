<template>
    <div>
        <b-card-group columns>
            <a href="https://blog.naver.com/1126pc/221721147398"  target="_sub">
                <b-card title="Vue 앱 Github Pages로 배포하기"
                        img-src="@/assets/images/blog1.png"
                        img-height="250" img-width="100"
                >
                    <b-card-text class="small text-muted">
                        ..서버 세팅 과정을 생략해줄 뿐만 아니라 소스 관리까지 너무 편리하게 연동이 되기 때문에
                        빠르게 구축하고자 하는 내 니즈와 부합해, Github pages를 활용하기로 했다..
                    </b-card-text>
                </b-card>
            </a>

                <a href="https://blog.naver.com/1126pc/221721768520"  target="_sub">
                    <b-card header="서버없이 Vue Router 사용시 History mode 404문제 해결하기">
                        <b-card-text class="small text-muted">
                            ..dist 폴더에 404.html을 만들면 404오류가 뜰 때
                            그 문서를 보여주기 때문에 raw한 404 에러를 보여주지는 않게 할 수 있다..
                        </b-card-text>
                    </b-card>
                </a>

                <a href="https://blog.naver.com/1126pc/221694071460"  target="_sub">
                    <b-card header="좌표데이터 좌표계 정리">
                        <b-card-text class="small text-muted">
                            ..좌표계는 3차원 좌표인데, 이를 컴퓨터로 그릴 때에는 2차원 평면에 그리기 때문에 "투영"의 과정이 필요하다.
                            이 투영을 어떻게 하느냐에 따라 치도체계가 세분화된다...
                        </b-card-text>
                    </b-card>
                </a>

                <a href="https://blog.naver.com/1126pc/221693045759"  target="_sub">
                    <b-card title="OpenLayers5 - 지도 위에 차트 그리기"
                            img-src="https://postfiles.pstatic.net/MjAxOTEwMzBfMjA4/MDAxNTcyNDE0MjUwMTg1.7xo5acE-SZ6N9hEl6Ri3TttDkDeUt-BrKkis7rIOQ3Eg._vp04vAu8w9sbIaAGLpSIDCNGacnk4wQ9H9hgNImVsQg.PNG.1126pc/image.png?type=w773"
                            
                    >
                        <b-card-text class="small text-muted">
                            ..Open Layers로 그래프를 그릴 때는 ol-ext 라는 라이브러리를 쓴다...
                        </b-card-text>
                    </b-card>
                </a>

                <a href="https://blog.naver.com/1126pc/221539919568"  target="_sub">
                    <b-card title="ag-Grid Header Components"
                            img-src="https://postfiles.pstatic.net/MjAxOTA1MTdfNDMg/MDAxNTU4MDY3NDMwMTQ1.x1dAQhbfCld_eg5ra9HEzfB8sFOyoIZ2AFqDsFxkCW0g.AAWZ0X7kXVnDAFcBxMrb8x2JAFnKDFRXTtn36fzdN5sg.PNG.1126pc/image.png?type=w773"
                            
                    >
                        <b-card-text class="small text-muted">
                            ..컴포넌트는 header 셀 안에 감싸져서, 그리드가 복잡한 로직을 수행하는 데 문제가 없게 된다.
                            header 셀은 이렇게 생겼다..
                        </b-card-text>
                    </b-card>
                </a>

                <a href="https://blog.naver.com/1126pc/221701957508"  target="_sub">
                    <b-card header="자바스크립트, require 이해하기">
                        <b-card-text class="small text-muted">
                            ..모듈 안의 API(변수나 함수)에 접근할 권한이 없기 때문이라고 한다.
                            밖으로 내보낼 API를 module.exports라는 오브젝트에 넣어주어야 한다고 한다..
                        </b-card-text>
                    </b-card>
                </a>

        </b-card-group>
    </div>
</template>

<script>
export default {
    name: 'BlogCardList'
}
</script>

<style scoped>
.card {
    background-color: rgba(255, 255, 255, 0.9)
}
</style>