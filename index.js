
function generateSound(status){
    var listSound=document.getElementById("track");
    listSound.innerHTML="";
    console.log(listSound);
    if(!init){
        init=true;
        track=[];
        fav=[];
        for(let i=0;i<lagu.length;i++){
            track.push(lagu[i]);
        }
        /*var storedNames = JSON.parse(localStorage.getItem("fav"));
        for(let i=0;i<storedNames.length;i++){
            fav.push(storedNames[i]);
        }
        if(storedNames.length!=0){
            generateFav;
        }*/
    }
    console.log("status: "+status)
    if(status=="true"){
        console.log("status: "+status)
        for(let i=0;i<laguSub.length;i++){
            track.push(laguSub[i]);
        }
        
    }
    for(let i=0;i<track.length;i++){
    	var item = document.createElement('li');
        item.appendChild(document.createTextNode(track[i]["nama"]));
        item.id= track[i]["nama"];
        item.onclick=function(){switchLagu(track[i]["path"])};
        item.className="text-li";
        console.log(item);        
        
        var icon= document.createElement('img');
        icon.src="media/pngwing.com.png";
        icon.className="icon";
        icon.onclick=function(){favorite(track[i]["nama"])};
        item.append(icon);
        listSound.append(item);
    }   
    
    
    return track;
}
function resetData(){
    track=[];
    fav=[];
    sub=localStorage.getItem('sub');
    generateSound(sub);
}
function generateFav(){
    var listSound=document.getElementById("fav");
    listSound.innerHTML="";
    for(let i=0;i<fav.length;i++){
    	var item = document.createElement('li');
        item.appendChild(document.createTextNode(fav[i]["nama"]));
        item.id= fav[i]["nama"];
        item.onclick=function(){switchLagu(fav[i]["path"])};
        item.className="text-li";
        console.log(item);
        
        var icon= document.createElement('img');
        icon.src="media/red-x-emoji-png-png-image-326979.jpeg";
        icon.className="icon2";
        icon.onclick=function(){unfavorite(fav[i]["nama"])};
        item.append(icon);
        listSound.append(item);
    }    
    return fav;
}
function unsub(){
    for(let i=0;i<track.length;i++){
        for(let j=0;j<laguSub.length;j++){
            if(track[i]["nama"]==laguSub[j]["nama"]){
                track.splice(i,1);
                i--;
                break;
            }
        }
    }
    for(let i=0;i<fav.length;i++){
        for(let j=0;j<laguSub.length;j++){
            if(fav[i]["nama"]==laguSub[j]["nama"]){
                fav.splice(i,1);
                i--;
                break;
            }
        }
    }   
    
    generateSound();
    generateFav();
    return track;
}
function subscribe(){
    /*if(!localStorage.getItem('sub')){
        generateSound("sub");
        localStorage.setItem('sub',true);
    }else{
        if(localStorage.getItem('sub')){
            localStorage.setItem('sub',false);
            unsub();
        }else{
            localStorage.setItem('sub',true);
            generateSound("sub");
        }
    }*/
    var subs2=document.getElementById("subs");
    if(sub=="false"||!sub){
        
        localStorage.setItem('sub',true);
        sub=localStorage.getItem('sub');
        console.log(localStorage.getItem('sub')+"      <<");
        generateSound(sub);
        
        subs2.innerHTML="Unsubscribe";
    }else if(sub=="true"){
        unsub();      
        localStorage.setItem('sub',false);  
        sub=localStorage.getItem('sub');
        subs2.innerHTML="Subscribe";
    }
}
function favorite(title){
    for(let i=0;i<track.length;i++){
        if(track[i]["nama"]==title){
            fav.push(track.splice(i, 1)[0]);
            break;
        }
    }
    generateSound();
    generateFav();
    
    localStorage.setItem("fav", JSON.stringify(fav));
    return fav;
}

function unfavorite(title){
    for(let i=0;i<fav.length;i++){
        if(fav[i]["nama"]==title){
            track.push(fav.splice(i, 1)[0]);
            break;
        }
    }
    generateSound();
    generateFav();
    localStorage.setItem("fav", JSON.stringify(fav));
    return track;
}

function switchLagu(link){
    let audio=document.getElementById("audio");
    let mp3player=document.getElementById("trackplayer2");
    mp3player.src=link;

    audio.load();
}

function initNama(){
    //console.log("INIT NAMA: "+localStorage.getItem('user'))
    console.log(document.getElementById("namaUser"));
    document.getElementById("namaUser").innerHTML=localStorage.getItem('user');
    sub=localStorage.getItem('sub');
    if(!sub||sub==null||sub=="null"){
        sub="false";
        localStorage.setItem('sub',false);
    }
    var subs2=document.getElementById("subs");
    if(sub=="false"){
        subs2.innerHTML="Subscribe";
    }
    else{
        subs2.innerHTML="Unsubscribe";
    }
}

function logout(){
    init=false;
    unsub();
    localStorage.clear()
    document.getElementById('containerlogin').style.display = 'block';
    document.getElementById('containermain').style.display = 'none'; 
    document.getElementById('emailHelp1').textContent="We'll never share your email with anyone else."; 
}
const lagu=[{"nama":"bongo","path":"media/bongo.mp3"},{"nama":"s2","path":"media/s2.mp3"},{"nama":"Metallica - Orion","path":"media/Metallica - Orion.mp4"}];
const laguSub=[{"nama":"Coldplay - Fix You","path":"media/Coldplay - Fix You (Official Video).mp4"},{"nama":"AC_DC - Back In Black","path":"media/AC_DC - Back In Black (Official Video).mp4"},{"nama":"The Beatles - Let It Be","path":"media/The Beatles - Let It Be (Official Music Video).mp4"}];

let fav=[];
let track=[];
let init=false;
let sub=localStorage.getItem('sub');
//console.log("sub status="+sub);
//initNama();
//generateSound(sub);
//console.log(generateSound("sub"));
//console.log(favorite("s1"));
//console.log(favorite("s3full"));
//console.log(unfavorite("s1"));
//console.log(unsub());
    function muncul() {
      tutupReg();
      document.getElementById('form-login').style.display = 'block';
    }

    function tutup() {
      
      document.getElementById('form-login').style.display = 'none';
    }
    function munculReg() {
      tutup();
      document.getElementById('form-reg').style.display = 'block';
    }

    function tutupReg() {
      document.getElementById('form-reg').style.display = 'none';
    }

    function register() {
      let username = document.getElementById('exampleInputEmail2').value;
      let password = document.getElementById('exampleInputPassword2').value;
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("user", "User Baru");
      document.getElementById('containerlogin').style.display = 'none';
      document.getElementById('containermain').style.display = 'block';
      tutupReg();
      initNama();
      resetData();
      //generateSound(localStorage.getItem('sub'));   
    }

    function login() {
      let username = document.getElementById('exampleInputEmail1').value;
      let password = document.getElementById('exampleInputPassword1').value;

      if (localStorage.getItem("username") && localStorage.getItem("password")) {
        console.log(localStorage.getItem("username") + " " + username + "       " + localStorage.getItem("password") + " " + password);
        if (localStorage.getItem("password") == password && localStorage.getItem("username") == username) {
          if (!localStorage.getItem("sub")) {
            localStorage.setItem("sub", false);
          }
          localStorage.setItem("user", username);
          document.getElementById('containerlogin').style.display = 'none';
          document.getElementById('containermain').style.display = 'block';
          initNama();
          resetData();
          tutup();
        }
        else {
          //console.log(document.getElementById('emailHelp1'));
          document.getElementById('emailHelp1').textContent = "MAAF Username atau Password salah";
        }
      } else {
        document.getElementById('emailHelp1').textContent = "MAAF Username atau Password tidak dikenali";
      }

    }