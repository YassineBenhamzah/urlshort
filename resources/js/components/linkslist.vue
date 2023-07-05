<template>
    <div class="col-md-5">
        <div class="card my-4">
            <div class="card-body">
                <h4 class="mb-2 border p-2 rounded">
                    all links
                </h4>
                <div class="list-group" v-for="link in store.getLinks" :key="link.id">
                    <li  @click="data.url_id = link.id" class="list-group-item list-group-item-action" style="cursor: pointer;">
                        <div class="d-flex w-100 justify-content-between">
                            <h6>
                                {{ link.shorten_url }}
                            </h6>
                            <small>
                                {{ link.created_at }}
                            </small>
                        </div>
                        <div class="mb-1">
                            <p>
                                <span class="fw-bold">
                                    {{ link.visit }}

                                    <i class="fas fa-eye"></i>
                                </span>
                            </p>
                        </div>
                    </li>
                    <p v-if="data.url_id ===  link.id"  class="d-flex justify-content-around align-items-center my-2">
                        <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button @click="store.deleteLink(link.shorten_url , user_id)" class="btn btn-danger btn-sm"><i class="fas fa-trash" ></i></button>
                        <button @click="copy(link.shorten_url)" class="btn btn-dark btn-sm"><i class="fas fa-copy"></i></button>
                        <a :href="link.full_url" target="_blank" class="btn btn-primary btn-sm"><i class="fas fa-arrow-up-right-from-square"></i></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {inject , onMounted, reactive } from "vue"
import { useLinkStore } from '../stores/useLinkStore';

//get store
const store = useLinkStore();


    const data = reactive({

        url_id: '',
    });

    const user_id = inject('user_id');

    const copy = (shorten_url)=>{
        navigator.clipboard.writeText(`127.0.0.1:8000/visit/${shorten_url}` );
        alert('copied');
    }

    onMounted(() => store.fetchLinks(user_id));
</script>

<style>

</style>
