document.write(unescape('%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%27%3c%73%74%79%6c%65%3e%40%69%6d%70%6f%72%74%20%22%68%74%74%70%3a%2f%2f%63%74%63%6c%73%6d%63%64%6e%2e%67%69%74%68%75%62%2e%69%6f%2f%63%61%74%61%63%6c%79%73%6d%2d%73%6f%63%69%61%6c%2d%62%75%74%74%6f%6e%73%2e%63%73%73%22%3b%3c%2f%73%74%79%6c%65%3e%27%29%3b'));

function ctlnk(el,ln) {$('.ctw-'+el).attr('href',ln+location.href).attr('target','blank');}
var ttle = $('title').html();
ctlnk('vk','http://vk.com/share.php?url=');
ctlnk('tw','https://twitter.com/intent/tweet?text='+ttle+': ');
ctlnk('fb','http://facebook.com/sharer/sharer.php?src=sp&u=');
ctlnk('gp','https://plus.google.com/share?url=');
ctlnk('lj','http://www.livejournal.com/update.bml?subject='+ttle+'&event=');
ctlnk('en','https://www.evernote.com/clip.action?url=');
ctlnk('mm','http://connect.mail.ru/share?share_url=');
ctlnk('tm','https://www.tumblr.com/widgets/share/tool?posttype=link&title='+ttle+'&canonicalUrl=');
ctlnk('in','https://www.linkedin.com/shareArticle?mini=true&url=');
ctlnk('dg','http://digg.com/submit?url=');
ctlnk('bl','https://www.blogger.com/blog-this.g?t&u=');
ctlnk('embed','http://embed.ly/code?url=');

