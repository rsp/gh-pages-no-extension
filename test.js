var f = document.title;
var u = window.location.pathname.replace(/.*gh-pages-no-extension\//,'');
var au = document.querySelector("a[href='"+u+"']");
var af = document.querySelector("a[href='"+f+"']");
au.className += ' tu';
af.className += ' tf';
au.parentNode.previousElementSibling.className += ' a';
af.parentNode.nextElementSibling.className += ' a';
var p = window.location.protocol;
if (p == 'http:') {
    document.getElementsByTagName('h1')[0].innerHTML
    += ' <span class=warn><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> INSECURE CONNECTION</span>';
}
if (p == 'https:') {
    document.getElementsByTagName('h1')[0].innerHTML
    += ' <span class=ok><i class="fa fa-lock" aria-hidden="true"></i> HTTPS</span>';
}