<template>
    <header class="w-full">
        <NuxtLink to="/">
            <img src="/images/logo.jpg" alt="" />
        </NuxtLink>
        <nav>
            <div
                v-for="(link, index) in links"
                :key="index"
                class="menu-button"
            >
                <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>

                <div v-if="link.sub.length" class="menu-sub-button">
                    <NuxtLink
                        v-for="(sublink, subIndex) in link.sub"
                        :key="subIndex"
                        :to="sublink.path"
                        >{{ sublink.label }}</NuxtLink
                    >
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const links = [
    {
        label: "HOME",
        path: "/",
        sub: [],
    },
    {
        label: "BUSINESS",
        path: "/business",
        sub: [
            {
                label: "AI사업",
                path: "/business",
            },
            {
                label: "ICT사업",
                path: "/business/ict",
            },
            {
                label: "ITO사업",
                path: "/business/ito",
            },
        ],
    },
    {
        label: "ABOUT US",
        path: "/about",
        sub: [
            {
                label: "연혁",
                path: "/about",
            },
            {
                label: "찾아오시는 길",
                path: "/about/contact",
            },
        ],
    },
    {
        label: "CAREERS",
        path: "/careers",
        sub: [
            {
                label: "기업문화",
                path: "/careers",
            },
            {
                label: "인재채용",
                path: "/careers/scout",
            },
        ],
    },
];
</script>

<style lang="scss"></style>
