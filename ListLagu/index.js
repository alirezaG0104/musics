
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
        item.appendChild(document.createTextNode(track[i]["path"]));
        item.id= track[i]["nama"];
        item.onclick=function(){switchLagu(track[i]["path"])};
        console.log(item);        
        listSound.append(item);
        var icon= document.createElement('img');
        icon.src="media/pngwing.com.png";
        icon.className="icon";
        icon.onclick=function(){favorite(item.id)};
        listSound.append(icon);
    }   
    
    return track;
}

function generateFav(){
    var listSound=document.getElementById("fav");
    //listSound=document.getElementById("fav");
    listSound.innerHTML="";
    for(let i=0;i<fav.length;i++){
    	var item = document.createElement('li');
        item.appendChild(document.createTextNode(fav[i]["path"]));
        item.id= fav[i]["nama"];
        item.onclick=function(){switchLagu(fav[i]["path"])};
        console.log(item);
        listSound.append(item);
        var icon= document.createElement('img');
        icon.src="media/pngwing.com.png";
        icon.className="icon";
        icon.onclick=function(){unfavorite(item.id)};
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
function favorite(title){
    //var listSound=document.getElementById("track");
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
    //var listSound=document.getElementById("track");
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
    let mp3player=document.getElementById("trackplayer2");
    mp3player.src=link;
}
const lagu=[{"nama":"s1","path":"s1.mp3"},{"nama":"s2","path":"s2.mp3"},{"nama":"s3","path":"s3.mp3"}];
const laguSub=[{"nama":"s1full","path":"s1full.mp3"},{"nama":"s2full","path":"s2full.mp3"},{"nama":"s3full","path":"s3full.mp3"}];

let fav=[];
let track=[];
generateSound();
console.log(generateSound("sub"));
//console.log(favorite("s1"));
//console.log(favorite("s3full"));
//console.log(unfavorite("s1"));
//console.log(unsub());

