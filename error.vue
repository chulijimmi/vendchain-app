<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
})
const handleError = () => clearError()

</script>

<template>
    <div>
        <h2>{{ props.error?.statusCode }}</h2>
        <button @click="handleError">Clear Error</button>
    </div>
</template>