
function generateSound(status){
    var listSound=document.getElementById("track");
    listSound.innerHTML="";
    console.log(listSound);
    if(track.length==0){
        for(let i=0;i<lagu.length;i++){
            track.push(lagu[i]);
        }
    }
    if(status){
        if(status=="sub"){
            for(let i=0;i<laguSub.length;i++){
                track.push(laguSub[i]);
            }
        }
    }
    for(let i=0;i<track.length;i++){
    	var item = document.createElement('li');
        item.appendChild(document.createTextNode(track[i]["nama"]));
        item.id= track[i]["nama"];
        item.onclick=function(){switchLagu(track[i]["path"])};
        console.log(item);        
        listSound.append(item);
        var icon= document.createElement('img');
        icon.src="media/pngwing.com.png";
        icon.className="icon";
        icon.onclick=function(){favorite(track[i]["nama"])};
        listSound.append(icon);
    }   
    
    return track;
}

function generateFav(){
    var listSound=document.getElementById("fav");
    listSound.innerHTML="";
    for(let i=0;i<fav.length;i++){
    	var item = document.createElement('li');
        item.appendChild(document.createTextNode(fav[i]["nama"]));
        item.id= fav[i]["nama"];
        item.onclick=function(){switchLagu(fav[i]["path"])};
        console.log(item);
        listSound.append(item);
        var icon= document.createElement('img');
        icon.src="media/pngwing.com.png";
        icon.className="icon";
        icon.onclick=function(){unfavorite(fav[i]["nama"])};
        listSound.append(icon);
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
    if(!localStorage.getItem('sub')){
        localStorage.setItem('sub',true);
    }else{
        if(localStorage.getItem('sub')){
            localStorage.setItem('sub',false);
            unsub();
        }else{
            localStorage.setItem('sub',true);
            generateSound("sub");
        }
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
    return track;
}

function switchLagu(link){
    let audio=document.getElementById("audio");
    let mp3player=document.getElementById("trackplayer2");
    mp3player.src=link;

    audio.load();
}
const lagu=[{"nama":"bongo","path":"media/bongo.mp3"},{"nama":"s2","path":"media/s2.mp3"},{"nama":"s3","path":"media/s3.mp3"}];
const laguSub=[{"nama":"s1full","path":"s1full.mp3"},{"nama":"s2full","path":"s2full.mp3"},{"nama":"s3full","path":"s3full.mp3"}];

let fav=[];
let track=[];
generateSound();
console.log(generateSound("sub"));
//console.log(favorite("s1"));
//console.log(favorite("s3full"));
//console.log(unfavorite("s1"));
//console.log(unsub());

