var btns = "<li class="vk"><a title="ВКонтакте" class="ctw-vk"><span>ВКонтакте</span></a></li>
<li class="tw"><a title="Twitter" class="ctw-tw"><span>Twitter</span></a></li>
<li class="fb"><a title="Facebook" class="ctw-fb"><span>Facebook</span></a></li>
<li class="gp"><a title="Google+" class="ctw-gp"><span>Google+</span></a></li>
<li class="lj"><a title="LiveJournal" class="ctw-lj"><span>LiveJournal</span></a></li>
<li class="en"><a title="Evernote" class="ctw-en"><span>Evernote</span></a></li>
<li class="mm"><a title="Мой Мир" class="ctw-mm"><span>Мой Мир</span></a></li>
<li class="tm"><a title="Tumblr" class="ctw-tm"><span>Tumblr</span></a></li>
<li class="in"><a title="LinkedIn" class="ctw-in"><span>LinkedIn</span></a></li>
<li class="dg"><a title="Digg" class="ctw-dg"><span>Digg</span></a></li>
<li class="bl"><a title="Blogger" class="ctw-bl"><span>Blogger</span></a></li>
<li class="em"><a title="Embedly" class="ctw-embed"><span>Embedly</span></a></li>";

document.write("<ul class="cataclysm-social-btns colored cataclysm-onclick">"+btns+"<li class="all"><a onclick="$('#cataclysm-modal').addClass('display');" title="Прочие..." class="ctw-all"><span>Прочие</span></a></li>
</ul><center id="cataclysm-modal"><a onclick="$('#cataclysm-modal').removeClass('display');">&times;</a><div class="content cataclysm-onclick"><ul>"+btns+"</ul></div></center>");
