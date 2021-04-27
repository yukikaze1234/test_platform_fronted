<template>
    <div class="editor">
               <mavon-editor v-model="form.desc" :subfield="false" :preview="true"></mavon-editor>
    </div>
</template>

<script>
    export default {
        name: "Monitor",
        data() {
        return {
            value: '',
            defaultData: "preview"
        };
    },
    }
</script>

<style scoped>
.editor{
    height: 100%;
}
</style>