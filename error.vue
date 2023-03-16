<template>
    <NuxtLayout>
        <h1>아ㅋㅋ 에러 났는데요? Front탓 아님🤷‍♂️</h1>
        <code> ERROR CODE : {{ error.statusCode }} </code>
        <p>📞 010-7937-7740로 문의하던가 말던가</p>
    </NuxtLayout>
</template>

<script setup>
const props = defineProps({
    error: Object,
});

console.dir(props.error);
</script>

<style lang="scss"></style>
