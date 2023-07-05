<template>
    <div class="col-md-7">
        <div class="card my-4">
            <div class="card-body">
                <div class="mb-2" v-if="store.getValidationErrors">
                    <ul class="list-group" v-for="(errorArray , index) in store.getValidationErrors" :key="index">
                        <li v-for="(error , index) in errorArray" :key="index" class="list-group-item bg-danger text-white mb-2 p-2 rounded" >
                            {{ error }}
                        </li>
                    </ul>

                </div>
                <form @submit.prevent="store.addLink(user_id)">
                    <div class="form-group mb-2">
                        <input type="text" v-model="store.link.data.full_url" class="form-control" placeholder="FullUrl">
                    </div>
                    <div class="form-group mb-2">
                        <textarea class="form-control" cols="30" v-model="store.link.data.url_desc" rows="10" placeholder="description"></textarea>
                    </div>
                    <div class="form-group">
                        <button  class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useLinkStore } from '../stores/useLinkStore';

//get store
const store = useLinkStore();
//get user id
const user_id = inject('user_id');


</script>

<style>

</style>
