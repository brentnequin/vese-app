<template>
    <div :style="backgroundObject">
        <b-jumbotron :header="header" :lead="lead" style="background: transparent"
            :class="dark ? 'text-white' : 'text-black'" :fluid="fluid">
            <slot></slot>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        lead: String,
        bgImgSrc: String,
        bgColor: String,
        dark: Boolean,
        contain: Boolean,
        fluid: Boolean
    },
    computed: {
        backgroundObject() {
            const imagePath = this.$img(this.bgImgSrc)
            return {
                backgroundImage: `url(${imagePath})`,
                backgroundSize: this.contain ? 'contain' : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: this.bgColor,
                minHeight: "20rem"
            }
        }
    }
}
</script>