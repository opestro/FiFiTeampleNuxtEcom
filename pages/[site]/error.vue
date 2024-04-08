<template>
    <div>
        error
        {{ tenant }}
    </div>
</template>
<script setup>

const tenant = await useTenant()

</script>