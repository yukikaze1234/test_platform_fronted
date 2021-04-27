<template>
    <div class="editor">
        <mavon-editor v-model="value" style="min-height:100%;" />
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