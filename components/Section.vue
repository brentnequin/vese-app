<template>
<section>
    <b-container class="my-5" :fluid="fluid"><slot></slot></b-container>
</section>
</template>

<script>
export default {
    props: {
        fluid: {
            type: Boolean
        }
    }
}
</script>
