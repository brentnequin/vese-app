<template>
    <div :style="backgroundObject">
        <b-jumbotron
            :header="header"
            :lead="lead"
            style="background: transparent"
            :class="dark ? 'text-white' : 'text-black'"
        >
            <slot></slot>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        lead: String,
        bgImageSrc: String,
        imageAsset: Boolean,
        dark: Boolean,
        contain: Boolean
    },
    computed: {
        backgroundObject() {
            const imagePath = this.$img(this.bgImageSrc)
            return {
                backgroundImage: this.imageAsset ? `url(${imagePath})` : `url(${imagePath})` ,
                backgroundSize: this.contain ? 'contain' : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }
    }
}
</script>