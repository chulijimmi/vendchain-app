<script setup lang="ts">
const route = useRoute();
if (route.params) {
    throw createError({
        statusCode: 701,
        statusMessage: 'Error params exist in if',
        stack: 'Page About'
    })
}
</script>
<template>
    <div class="bg-primary/50 p-5">
        <h1>This is about page</h1>
    </div>
</template>