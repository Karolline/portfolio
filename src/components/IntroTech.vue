<template>
    <b-container>
        <b-row>
            <b-col>
                <unordered-list :contents="contents"/>
            </b-col>
            <b-col>
                <unordered-list :contents="contents"/>
            </b-col>
            <b-col>
                <unordered-list :contents="contents"/>
            </b-col>
        </b-row>
    </b-container>
         

</template>

<script>
import UnorderedList from '@/components/UnorderedList'
import contentData from '@/assets/json/IntroTechContents.json'

export default {
    name: 'IntroTech',
    components: {
        UnorderedList
    },
    data () {
        return {
            contents: contentData.contents
        }
    }
}
</script>