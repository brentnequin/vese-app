<template>
    <div>
        <b-img
            :src="imgSrc"
            style="width: 100%; max-height: 20rem; object-fit: cover;"
            class="mb-5"
        >
        </b-img>
    </div>
</template>

<script>
export default {
    props: ['imgSrc']
}
</script>