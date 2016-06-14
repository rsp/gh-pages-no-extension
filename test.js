var f = 'test1.html';
var u = window.location.pathname.replace(/.*gh-pages-no-extension\//,'');
var au = document.querySelector("a[href='"+u+"']");
var af = document.querySelector("a[href='"+f+"']");
au.className += ' tu';
af.className += ' tf';
au.parentNode.previousElementSibling.className += ' a';
af.parentNode.nextElementSibling.className += ' a';
