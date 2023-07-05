<template>
    <div class="row">
        <CreateLink />
        <linkslist />
    </div>
</template>

<script setup>
    import CreateLink from '@/components/CreateLink.vue';
    import linkslist from '@/components/linkslist.vue';
    import { provide } from 'vue';

    provide('user_id' , props.user_id);
    const props = defineProps({
        user_id: {
            type: Number,
            required: true,
        }
    });
</script>

<style>

</style>
