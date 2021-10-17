<template>
    <div class="the-sidebar bg-light slide" :class="{ 'the-sidebar-left': left, 'the-sidebar-right': !left, shadow: shadow, show: visible }">
        <header>
            <slot name="header">
                <div class="container my-2 d-flex justify-content-between">
                    <h4>{{ title }}</h4>
                    <button class="btn btn-close btn-sm" @click="$emit('hide', false)"></button>
                </div>
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer class="position-fixed bottom-0">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        left: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: null
        },
        visible: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
.the-sidebar{
    position: fixed;
    top: 0;
    width: 25rem;
    height: 100vh;
    z-index: 1;
}
.the-sidebar-right {
    left: auto;
    right: 0;
}
.the-sidebar-left {
    left: 0;
    right: auto;
}
.the-sidebar.the-sidebar-right.slide:not(.show) {
    transform: translateX(100%);
}
.the-sidebar.the-sidebar-left.slide:not(.show) {
    transform: translateX(-100%);
}
.the-sidebar {
    transition: transform .3s ease-in;
}
</style>