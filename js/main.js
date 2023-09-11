let heading4 = document.getElementsByTagName('h4');
let toggle = document.querySelector('.toggle');
let nav_img = document.querySelector('nav img');
let nav_btn = document.querySelector('nav button');
let nav = document.querySelector('.navbar ul');
let close = document.querySelector('.close');
let link1 = document.querySelector('.under-maal .an-maali');
let link2 = document.querySelector('.under-maal .ser');
let link3 = document.querySelector('.under-maal .phot-cent');
/*Link1 */
heading4[0].onclick = function(){
    link1.style.display='block';
}
link1.onmouseover = function(){
    link1.style.display='block';
}
link1.onmouseout = function(){
    link1.style.display='none';
}
/*Link2 */
heading4[1].onclick = function(){
    link2.style.display='block';
}
link2.onmouseover = function(){
    link2.style.display='block';
}
link2.onmouseout = function(){
    link2.style.display='none';
}
/*Link3 */
heading4[2].onclick = function(){
    link3.style.display='block';
}
link3.onmouseover = function(){
    link3.style.display='block';
}
link3.onmouseout = function(){
    link3.style.display='none';
}
/* */
toggle.onclick = function(){
    toggle.style.display='none';
    nav_btn.style.display='none';
    nav_img.style.display='none';
    nav.style.display='flex';
    close.style.display='block';
};
close.onclick = function(){
    nav.style.display='none';
    nav_btn.style.display='none';
    nav_img.style.display='block';
    toggle.style.display = 'block';
    close.style.display='none';
};