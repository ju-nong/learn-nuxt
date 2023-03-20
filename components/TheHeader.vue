<template>
    <header class="w-full h-[60px] flex justify-between px-6 items-center">
        <NuxtLink to="/" class="min-w-[220px] h-[80%]">
            <!-- <img class="h-full" src="/images/logo.jpg" alt="logo" /> -->
            <img
                class="h-full"
                src="https://api.iconify.design/logos:atom.svg"
                alt="logo"
            />
        </NuxtLink>
        <nav class="gap-2">
            <div
                v-for="(link, index) in links"
                :key="index"
                class="header-menu h-full flex items-center relative px-4"
            >
                <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>

                <ul
                    v-if="link.sub.length"
                    class="header-menu-sub text-center w-full absolute top-[100%] left-0 opacity-0 pointer-events-none pt-4"
                >
                    <li
                        v-for="(sublink, subIndex) in link.sub"
                        :key="subIndex"
                        class="mb-4"
                    >
                        <NuxtLink :to="sublink.path">{{
                            sublink.label
                        }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div
            class="hamburger-button items-center"
            @click="hamburgerConfig.isShow = !hamburgerConfig.isShow"
        >
            <button>
                <Icon name="humbleicons:bars" size="36" />
            </button>
        </div>

        <div
            class="hamburger-menu-container fixed w-[100vw] h-[100vh] top-0 left-0 z-[900]"
            :class="{ show: hamburgerConfig.isShow }"
        >
            <div
                class="hamburger-side flex flex-col w-[200px] h-full float-right bg-white z-[899] relative gap-y-4 py-4"
            >
                <div
                    v-for="(link, index) in links"
                    :key="index"
                    class="hamburger-menu text-center"
                >
                    <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>

                    <ul
                        v-if="link.sub.length"
                        class="hamburger-menu-sub text-center w-full"
                    >
                        <li
                            v-for="(sublink, subIndex) in link.sub"
                            :key="subIndex"
                            class="mb-4"
                        >
                            <NuxtLink :to="sublink.path">{{
                                sublink.label
                            }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="hamburger-background absolute w-full h-full bg-black/[0.6] z-[898]"
                @click="hamburgerConfig.isShow = false"
            ></div>
        </div>
    </header>
</template>

<script setup>
const hamburgerConfig = reactive({
    isShow: false,
});

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
