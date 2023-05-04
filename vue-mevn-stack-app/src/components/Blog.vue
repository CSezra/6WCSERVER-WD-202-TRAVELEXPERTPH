<template>
    <div class="container">
        <h1 class="text-center mb-4 bg-blue">ADD POST</h1>
        <form @submit.prevent = "handleSubmitForm">
            <div class="mb-3">
                 <label class="form-label">Title</label>
                 <input type="text" class="form-control" v-model="blog.title">
            </div>
            <div class="mb-3">
                <label class="form-label">Category</label>
                <input type="text" class="form-control" v-model="blog.category">
             </div>
             <div class="mb-3">
                <label class="form-label">Content</label>
                <textarea class="form-control" v-model="blog.content"> </textarea>
             </div>
             <button type="submit" class="btn btn-primary">Add</button>
        </form>
</div>
</template>
  
  <script>
    import axios from "axios";
    export default{
        data() {
          return{
              blog: {
                title:'',
                category:'',
                content: ''
              }
          }
        },
        methods: {
          handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-blog';
                
                axios.post(apiURL, this.blog).then(() => {
                  this.$router.push('/')
                  this.blog = {
                    title:'',
                    category:'',
                    content: ''

                  }
                }).catch(error => {
                    console.log(error)
                });
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