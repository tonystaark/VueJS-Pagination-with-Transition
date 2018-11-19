
const paginationApp = new Vue({
  el: '#pagination-app',
  data: {
    posts: [],
    baseUrl: 'https://reqres.in/api/users?page=', //change for get request url
    page: 1,
    // perPage: 3,//change for  num of posts to get viewed per page
    pages: [],
    // total: 12,
    total_pages: 10
  },
  methods: {
    getPosts () {
      // axios.get(this.baseUrl+'posts')
      axios.get(this.baseUrl + this.page)
        .then(response => {
         
          response.data.data.length > 0 ? this.posts = response.data.data : this.posts = this.posts;
          // this.total_pages = response.data.total_pages;
          if(this.page > this.total_pages){
            console.log(this.page,this.total_pages)
            this.pages.push(this.pages.length+1)
          }
        })
        .catch(err => {
          throw new Error('session not found');
        });
    },
    // setPages () {
    //   // let numberOfPages = Math.ceil(this.posts.length / this.perPage);
    //   // for (let index = 1; index <= numberOfPages; index++) {
    //   //   this.pages.push(index);
    //   // }
    //    for (let index = 1; index <= this.total_pages; index++) {
    //     this.pages.push(index);
    //   }
    //   console.log(this.pages)
    // },

    // nextPage(){
      
    // }
    // paginate (posts) {
    //   let page = this.page;
    //   let perPage = this.perPage;
    //   let from = (page * perPage) - perPage;
    //   let to = (page * perPage);
    //   return  posts.slice(from, to);
    // }
    
  },
  created () {
    this.getPosts();
  },
  mounted(){
    for (let index = 1; index <= this.total_pages; index++) {
      this.pages.push(index);
    }
  },
  computed: {
    pages: function(array) {
      console.log(array)
    }
  }
  // computed: {
  //   displayedPages: {
  //     get: function (){
  //       return this.pages
  //     },
  //     set: function(){
  //       if(this.page > 10){
  //         return this.pages.slice(this.page-1,this.pages + 3);
  //       } else{
  //         return this.pages
  //       }
  //     }
  //   }
    
  // }
});