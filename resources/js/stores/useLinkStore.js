
import Swal from 'sweetalert2';
import { defineStore } from 'pinia';

export const useLinkStore = defineStore('links', {
    state:()=>({
        links: [],
        errors: null,
        link:{
            data: {
                full_url: '',
                url_desc: '',
            }
        }
    }),

        getters: {
            getLinks : (state)=>  state.links,
            getValidationErrors : (state) => state.errors
        },
        
        actions: {
            async addLink(user_id){
                try{
                    const response = await axios.post('/api/add/url' , {
                        full_url: this.link.data.full_url,
                        url_desc: this.link.data.url_desc,
                        user_id
                    });
                    this.links.unshift(response.data);
                    this.link = {
                        data: {
                        full_url: '',
                        url_desc: '',
                    }
                    };
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'your work has been added',
                        showCancelButton: true,
                        timer: 2500
                    });
                    this.errors = null;
                } catch(error){
                    this.errors = error.response && error.response.data.errors;
                    console.log(error);
                }
            },


            async fetchLinks(user_id) {
                try{
                    const response =  await axios.get(`/api/user/urls/${user_id}` );
                    this.links = response.data.data;

                }catch(error){
                    console.log(error);
                }

            },

             deleteLink(shorten_url , user_id) {
                try {
                    Swal.fire({
                        title: 'are you sure?',
                        text: "you won't  be able to delete this link?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: 'd33',
                        confirmButtonText: 'yes, delete this link'
                    }).then(async(result) => {
                        if(result.isConfirmed){
                            await axios.delete(`/api/url/delete/${shorten_url}`)
                            this.fetchLinks(user_id);
                            Swal.fire(
                                'DELETED',
                                'Your file has been deleted',
                                'success'
                            )
                        }
                    });

                } catch (error) {
                    console.error(error);
                }
            }

        },
    });

