<template>
    <div class="container">
       <h1 class="text-center mb-4 bg-blue"> {{ this.blog.title }}</h1> 
       <h3 class="text-center">{{ this.blog.category }}</h3>
       <p class="text-center">{{ this.blog.content }}</p>
       <div class="flex-grow-1 ms-3">
                        <router-link :to="{name: 'editblog', params:{id:this.$route.params.id}}" class="btn btn-success w-25">EDIT BLOG</router-link>
        </div>
        <div class="flex-grow-1 ms-3 mt-2">
            <button @click.prevent="deleteStudent(blog._id)" class="btn btn-danger w-25">Delete</button>
        </div>
    </div>
</template>
  
<script>
    import axios from "axios";
    export default {
        data() {
                return{
                        blogs:[],
                        blog: {}
                }
        },
        created() {
                let apiURL = `http://localhost:4000/api/view-blog/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.blog = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL2 = 'http://localhost:4000/api/' ;
            axios.get(apiURL2).then(res => {
                this.blogs = res.data;
            }).catch(error => {
                console.log(error)
            });

        },
        methods: {
            deleteStudent(id){
                let delapi = `http://localhost:4000/api/delete-blog/${id}`;
                let indexOfArrayItem = this.blogs.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(delapi).then(() => {
                        this.$router.push('/'); 
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  .bg-blue{
    background-color: #d0efff;
    padding: 1rem;
    width: 30rem;
    margin: 0 auto;
  }
  </style>
  