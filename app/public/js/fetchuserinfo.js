var userInfo = new Vue({
  el: '#userinformation',
  data:{
    user:[
      {
        // name:{
        //   first:'',
        //   last:''

      }
    ],

  },
  methods:{
    fetchUserInfo(){
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => userInfo.user=json.results[0]);
    }
  },

  created (){
    this.fetchUserInfo();
  }
}

);
