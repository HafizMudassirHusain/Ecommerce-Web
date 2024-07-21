

var allUsers= []

var getbtn = document.getElementById('btn')
if(getbtn){

    getbtn.addEventListener("click",()=>{
        var email = document.getElementById('email')
        var pass = document.getElementById('password')
        var userName = document.getElementById('username')
    
        let obj = {
            username: userName.value,
            email: email.value,
            password: pass.value
        }
        allUsers.push(obj)
       localStorage.setItem('userdeatail',JSON.stringify(allUsers))
       location.href = 'signin.html'
    }) 
}


var getinBtn = document.getElementById('inbtn')

if(getinBtn){

    getinBtn.addEventListener('click',()=>{
        var email = document.getElementById('email')
        var pass = document.getElementById('password')
        var user = JSON.parse(localStorage.getItem('userdeatail'))
        user.forEach(data => {
          if(data.email == email.value && data.password == pass.value){
            location.href = '../Users/user.html'
            }
            else if(email.value == 'admin@gmail.com' && pass.value == 'admin123'){
                location.href = '../Admin/admin.html'
            }
            else{
                alert('invalid email or password')
            }
        });
       
    }) 
}

