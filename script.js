let fg=1;
function toggle_mode_func(id)
{
  if(fg===1)
  {
    document.getElementById(id).classList.add("dark");
    fg=0; 
  }
  else if(fg===0)
  {
    document.getElementById(id).classList.remove("dark");
    fg=1;
    toggle_mode.value="off"
  }
}


function prd_ms_in(id){
    document.getElementById(id).style.backgroundColor="rgb(181, 178, 190)"; 
}

function prd_ms_out(id){
        document.getElementById(id).style.backgroundColor="rgb(205, 201, 201)";      
}

// Validation before new registration 

let fg1 = 0;
let fg2 = 0;
let fg3 = 0;
let fg4 = 0;

function validate_regi_name(id)
{
    //console.log(id.value)
    let name = id.value;
      if(name.length>8)
      {
        lable_for_regi_name.innerHTML="Max Length (8)";
        form.style.height="380px";
        footer.style.marginTop="32px";
        fg1 = 1;
      }
      else
      {
        lable_for_regi_name.innerHTML="";
        form.style.height="360px";
        footer.style.marginTop="52px";
        fg1 = 0;
      }
}

function validate_regi_pwd(id)
{
  //console.log(id.value)
  let name = id.value;
  if(name.length<4)
  {
    lable_for_regi_pwd.innerHTML="Min Length (4)";
    form.style.height="380px";
    footer.style.marginTop="32px";
    fg2 = 1;
  }
  else if(name.length>6)
    {
      lable_for_regi_pwd.innerHTML="Max Length (6)";
      form.style.height="380px";
      footer.style.marginTop="32px";
      fg2 = 1;
    }
  else
  {
    lable_for_regi_pwd.innerHTML="";
    form.style.height="360px"; 
    footer.style.marginTop="52px";
    fg2 = 0;
  }
}

// validation for confirm password 
function validate_regi_conf_pwd(id)
{
   if(id.value!=regi_user_pwd.value){
      lable_for_regi_c_pwd.innerHTML="Password Not Matching";
      form.style.height="380px"; 
      footer.style.marginTop="32px";
      fg3 = 1;
   }
   else
   {
      lable_for_regi_c_pwd.innerHTML="";
      form.style.height="360px"; 
      footer.style.marginTop="52px";
      fg3 = 0;
   }
}

function validate_regi_ph(id)
{
   if((id.value).length>10 || (id.value).length<10){
    lable_for_regi_ph.innerHTML="Invalid Length";
    form.style.height="380px"; 
    footer.style.marginTop="32px";
    fg4 = 1;
   }
   else
   {
    lable_for_regi_ph.innerHTML="";
    form.style.height="360px"; 
    footer.style.marginTop="52px";
    fg4 = 0;
   }
}


//new registration.  have to store login info in local storage / delete when logout
// ADD Flage CONDITION TO PREVENT FALSY VALUE REGISTRATION
  function regi_new(){
    
    if(fg1==0 && fg2==0 && fg3==0 && fg4==0){
        
        let user = regi_user_name.value;
        localStorage.setItem("user_info",user);
    
        let pwd = regi_user_pwd.value;
        localStorage.setItem("pwd_info",pwd);
    
        alert("Account Created succesfully")
    }
    else{
      alert("Invalid inputs")
    }
  }
  
  
  function log_in_check()
  {
     let regi_user = localStorage.getItem("user_info")
     let regi_pwd = localStorage.getItem("pwd_info")

     if(log_user_name.value===regi_user && log_user_pwd.value===regi_pwd)
          alert("Login Succesfully")
        else
          alert(`No Account Found Named ${log_user_name.value} ! `)
    // alert(log_user_name.value)
    // alert(log_pwd_name.value)
  }
    

  //Functionality of menu bar

    let fg_menu=1;  
    function toggle_menu()
    {
      if(fg_menu==1){
            menu_down_box.classList.remove("menu_down_ctr");
            fg_menu=0;
      }
      else{
            menu_down_box.classList.add("menu_down_ctr")
            fg_menu=1;
      }
    }
    
function acc_info(){
 // console.log("acc info out : "+document.getElementById("log_user_name").value

 alert(` user_info is ${localStorage.getItem("user_info")}`)
 alert(` pwd_info is ${localStorage.getItem("pwd_info")}`)

//variable data got destroyed due to page refresh
//have to store login info in local storage / delete when logout
}

function cart_info(){
  alert("Cart info") 
}

function log_out(){
  alert("logout succesfully")
}

function del_acc(){
  alert(`Account ${localStorage.getItem("user_info")} Deleted succesfully`)
  localStorage.removeItem("user_info");
  localStorage.removeItem("pwd_info");
}



function prd_img_to_cart(img)
{
  console.log(img)
 //save clicked img url in local storage
 //in another fucntion load it while clicking on cart icon // anything else in cart
}
 


  let img = "wheel.webp";
  let url = `<img src='${img}' height='200px' width='200px' alt='img'>`;
  cart_prd_img_label.innerHTML=url;
  


function quntity_update(id)
{
  cart_prd_net_qty_label.innerText = id.value
  cart_prd_net_price_label.innerText = (id.value*9999)
}






//creating data in key value form

// let key = "user name";
// let value = ["yug",1234];



// storing as key vlaue pair in local storage

// localStorage.setItem(key,value);



//accecing value from key

//localStorage.getItem(key)
// console.log(` value at ${key} is ${localStorage.getItem(key)}`)



//removing value from storage with use of key

//localStorage.removeItem(key)



// clearing local storage

//localStorage.clear()
