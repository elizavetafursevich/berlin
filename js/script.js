// Colored Header
window.addEventListener('scroll', function (e) {
    let nav = document.getElementById('header');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('header-colored');
        nav.classList.remove('header-transparent');
    } else {
        nav.classList.add('header-transparent');
        nav.classList.remove('header-colored');
    }
});




// Video playback
document.getElementById("play").addEventListener("click", function (e) {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('shadow').style.display = 'none';
    document.getElementsByTagName('video')[0].play();
    document.getElementById('video').addEventListener('ended', function (e) {
        document.getElementsByTagName('video')[0].pause();
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('shadow').style.display = 'flex';
    }, false);
    document.getElementById('video').addEventListener('click', function (e) {
        document.getElementsByTagName('video')[0].pause();
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('shadow').style.display = 'flex';
    }, false);
}, false);



// Choosing a period
document.getElementById("monthly").onclick = function(){
    this.style.backgroundColor ="#50E3C2";
    document.getElementById("yearly").style.backgroundColor ="rgba(80, 227, 174, 0)";
    document.getElementById("basic-price").innerHTML = "$19";
    document.getElementById("pro-price").innerHTML = "$29";
    document.getElementById("pro-duration").innerHTML = "/month";
    document.getElementById("basic-duration").innerHTML = "/month";
};
document.getElementById("yearly").onclick = function(){
    this.style.backgroundColor ="#50E3C2";
    document.getElementById("monthly").style.backgroundColor ="rgba(80, 227, 174, 0)";
    document.getElementById("basic-price").innerHTML = "$200";
    document.getElementById("pro-price").innerHTML = "$320";
    document.getElementById("pro-duration").innerHTML  =  "/year";
    document.getElementById("basic-duration").innerHTML  = "/year";
};



//Package selection
document.getElementById("basic").onclick = function(){
    this.style.border ="#50E3C2 solid";
    document.getElementById("pro").style.border ="white";
};
document.getElementById("pro").onclick = function(){
    this.style.border ="#50E3C2 solid";
    document.getElementById("basic").style.border ="white";
};

