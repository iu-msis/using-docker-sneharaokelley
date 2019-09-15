var userInfo = new Vue({
  el: '#userinformation',
  data:{
    user:[

        'sneha'


    ],

  },
  methods:{
    fetchUserInfo(){
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => userInfo.user=json);
    }
  },

  created (){
    this.fetchUserInfo();
  }
}

);
