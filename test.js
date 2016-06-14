var f = document.title;
var u = window.location.pathname.replace(/.*gh-pages-no-extension\//,'');
var au = document.querySelector("a[href='"+u+"']");
var af = document.querySelector("a[href='"+f+"']");
au.className += ' tu';
af.className += ' tf';
au.parentNode.previousElementSibling.className += ' a';
af.parentNode.nextElementSibling.className += ' a';
var p = window.location.protocol;
var m = document.getElementById('message');
if (p == 'http:') {
    m.className += ' warn';
    m.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> INSECURE CONNECTION';
}
if (p == 'https:') {
    m.className += ' ok';
    m.innerHTML = '<i class="fa fa-lock" aria-hidden="true"></i> HTTPS';
}