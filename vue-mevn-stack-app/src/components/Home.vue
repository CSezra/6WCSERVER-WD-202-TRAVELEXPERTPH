<template>
    <div class="container">
        <h1 class="text-center mb-4 bg-blue">TRAVEL EXPERT PH</h1>
        <div class="row align-items-start p-4">
            <div class="col">
                    <img src="../assets/dbpic.jpg" class= "w-100" alt="">
            </div>
            <div class="col">
                    <p>Online travel Web sites have been the most frequently visited online information 
facilities by travelers. (W. Chih Chiou, 2011) The notion underlying the growing popularity of 
travel blogging is based on two factors. To begin with, traveling, recreation, and cultural tourism 
appear to be the public's key expanding interests. Second, the premise of the travel blog assumes 
the blogger's particular impartial perspective. Travel blogs allow visitors to gain knowledge 
from other people's experiences rather than simply advertising stuff from tourism agencies.
                    </p>
            </div>
            <div class="col">
            </div>
         </div>
         <div class="row align-items-start p-4">
         <div class="col">
            </div>
            <div class="col">
                    <p>Travel Expert Ph is a blog website consists of a user interface that allows the users to 
access various travel related content, such as articles, photos, and videos. The website’s front 
end is created using VueJS basics with routing and navigation while the backend of the website 
is created in MongoDB that is connected on the NodeJS file of the website. The website’s 
backend is responsible for managing the content, storing, organizing, and displaying it to the 
users.
                    </p>
            </div>
            <div class="col">
                <img src="../assets/db2pic.jpg" class= "w-100" alt="">
            </div>
            </div>

            <div class="travels">
            <h3 class="text-center mb-4 bg-blue">Recent Blogs</h3>

            <!--  -->
            <div v-for="b in blogs" :key="b._id" class="container" style="padding: .5rem;">
                
                <div class="card w-100">
                    <div class="card-body d-flex align-items-center" style="margin-right: 1rem;">

                        <div class="ms-3">
                            <i class="uil uil-sunset icon-size"></i>
                        </div>

                        <div class="flex-grow-1 ms-3">
                            <h5 class="card-title loc-name">{{b.title}}</h5>
                        </div>

                        <div class="ms-3">
                            <p class="card-text">{{b.category}}</p>
                        </div>

                        <div class="ms-3">
                            <router-link :to="{name: 'blogpage', params: {id: b._id}}" class="btn btn-success" >🡆</router-link>
                        </div>

                    </div>
                </div>

            </div>
        
        </div>

</div>
</template>
  
  <script>
    import axios from "axios";
    export default {
        data() {
                return{
                        blogs:[]
                }
        },
        created() {
                let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.blogs = res.data;
            }).catch(error => {
                console.log(error)
            });


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
  