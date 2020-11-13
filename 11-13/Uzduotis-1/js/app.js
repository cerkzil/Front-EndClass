function User(email, userName, phone, userId) {
  this.email = email;
  this.userName = userName;
  this.phone = phone;
  this.userId = userId;
  this.showData = function(){
    alert('Email: ' + email + '\n' +
          'Username: ' + userName + '\n' +
          'Phone: ' + phone + '\n' +
          'User ID: ' + userId + '\n')
  }
}

var user1 = new User('milky@vrc.com', 'CerkZil', 891169420, 47);
console.log(user1);

const btn1 = document.getElementById('btn1');
btn1.onclick = function(e){
  user1.showData();
}
