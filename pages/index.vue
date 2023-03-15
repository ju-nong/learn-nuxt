<template>
    <div>
        <h1>Color mode: {{ preference }}</h1>
        <select v-model="preference">
            <option value="system">System</option>
            <option value="light">light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

const preference = ref(colorMode.preference);

watch(preference, (to, from) => {
    colorMode.preference = to;
});
</script>

<style lang="scss"></style>
