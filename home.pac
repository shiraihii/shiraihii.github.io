function FindProxyForURL(url, host) {
	proxy = "HTTPS 192.168.3.2:8088";
	direct = "DIRECT";
	if (isPlainHostName(host)) return direct;
	else if (shExpMatch(host, "localhost.com")) {
		return proxy;
	} else if (shExpMatch(host, "uku.im")) {
		return proxy;
	} else if (shExpMatch(host, "mainland.io")) {
		return proxy;
	} else if (shExpMatch(host, "i0.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i1.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i2.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i3.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i4.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i5.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i6.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i7.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i8.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "i9.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "cntv.cn")) {
		return proxy;
	} else if (shExpMatch(host, "letv.com")) {
		return proxy;
	} else if (shExpMatch(host, "lecloud.com")) {
		return proxy;
	} else if (shExpMatch(host, "lesports.com")) {
		return proxy;
	} else if (shExpMatch(host, "video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "m.video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "player.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "list.video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "v.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "m.v.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "film.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "sports.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "xw.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "v.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "sports.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "v.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "video.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "sports.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "sports.sina.cn")) {
		return proxy;
	} else if (shExpMatch(host, "tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "sports.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "cbachina.sports.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "m.tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "film.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "m.film.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "live.tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "v.ifeng.com")) {
		return proxy;
	} else if (shExpMatch(host, "vip.v.ifeng.com")) {
		return proxy;
	} else if (shExpMatch(host, "qiyi.com")) {
		return proxy;
	} else if (shExpMatch(host, "iqiyi.com")) {
		return proxy;
	} else if (shExpMatch(host, "youku.com")) {
		return proxy;
	} else if (shExpMatch(host, "tudou.com")) {
		return proxy;
	} else if (shExpMatch(host, "hunantv.com")) {
		return proxy;
	} else if (shExpMatch(host, "bilibili.com")) {
		return proxy;
	} else if (shExpMatch(host, "tiantian.tv")) {
		return proxy;
	} else if (shExpMatch(host, "04stream.tv")) {
		return proxy;
	} else if (shExpMatch(host, "kankan.com")) {
		return proxy;
	} else if (shExpMatch(host, "pptv.com")) {
		return proxy;
	} else if (shExpMatch(host, "56.com")) {
		return proxy;
	} else if (shExpMatch(host, "wasu.cn")) {
		return proxy;
	} else if (shExpMatch(host, "ku6.com")) {
		return proxy;
	} else if (shExpMatch(host, "joy.cn")) {
		return proxy;
	} else if (shExpMatch(host, "aipai.com")) {
		return proxy;
	} else if (shExpMatch(host, "baomihua.com")) {
		return proxy;
	} else if (shExpMatch(host, "narutom.com")) {
		return proxy;
	} else if (shExpMatch(host, "pps.tv")) {
		return proxy;
	} else if (shExpMatch(host, "ppstream.com")) {
		return proxy;
	} else if (shExpMatch(host, "fun.tv")) {
		return proxy;
	} else if (shExpMatch(host, "1905.com")) {
		return proxy;
	} else if (shExpMatch(host, "fengyunlive.com")) {
		return proxy;
	} else if (shExpMatch(host, "y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "m.y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "i.y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "music.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "music.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "xiami.com")) {
		return proxy;
	} else if (shExpMatch(host, "douban.fm")) {
		return proxy;
	} else if (shExpMatch(host, "duomi.com")) {
		return proxy;
	} else if (shExpMatch(host, "kugou.com")) {
		return proxy;
	} else if (shExpMatch(host, "kuwo.cn")) {
		return proxy;
	} else if (shExpMatch(host, "yinyuetai.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.localhost.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.uku.im")) {
		return proxy;
	} else if (shExpMatch(host, "*.mainland.io")) {
		return proxy;
	} else if (shExpMatch(host, "*.i0.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i1.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i2.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i3.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i4.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i5.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i6.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i7.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i8.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i9.letvimg.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.cntv.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.letv.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.lecloud.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.lesports.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.m.video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.player.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.list.video.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.v.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.m.v.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.film.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.sports.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.xw.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.v.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.sports.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.v.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.video.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.sports.sina.com.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.sports.sina.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.sports.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.cbachina.sports.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.m.tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.film.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.m.film.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.live.tv.sohu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.v.ifeng.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.vip.v.ifeng.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.qiyi.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.iqiyi.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.youku.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.tudou.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.hunantv.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.bilibili.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.tiantian.tv")) {
		return proxy;
	} else if (shExpMatch(host, "*.04stream.tv")) {
		return proxy;
	} else if (shExpMatch(host, "*.kankan.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.pptv.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.56.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.wasu.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.ku6.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.joy.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.aipai.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.baomihua.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.narutom.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.pps.tv")) {
		return proxy;
	} else if (shExpMatch(host, "*.ppstream.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.fun.tv")) {
		return proxy;
	} else if (shExpMatch(host, "*.1905.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.fengyunlive.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.m.y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.i.y.qq.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.music.baidu.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.music.163.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.xiami.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.douban.fm")) {
		return proxy;
	} else if (shExpMatch(host, "*.duomi.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.kugou.com")) {
		return proxy;
	} else if (shExpMatch(host, "*.kuwo.cn")) {
		return proxy;
	} else if (shExpMatch(host, "*.yinyuetai.com")) {
		return proxy;
	} else if (shExpMatch(url, "http://3g.163.com/touch/sports/*")) {
		return proxy;
	} else if (shExpMatch(url, "http://fb.com/uku.im")) {
		return proxy;
	} else if (shExpMatch(url, "https://fb.com/uku.im")) {
		return proxy;
	} else if (shExpMatch(url, "http://twitter.com/Unblock_Youku")) {
		return proxy;
	} else if (shExpMatch(url, "https://twitter.com/Unblock_Youku")) {
		return proxy;
	} else if (shExpMatch(url, "https://chrome.google.com/webstore/detail/pdnfnkhpgegpcingjbfihlkjeighnddk")) {
		return proxy;
	} else if (shExpMatch(url, "https://chrome.google.com/webstore/detail/pdnfnkhpgegpcingjbfihlkjeighnddk*")) {
		return proxy;
	} else if (shExpMatch(url, "https://chrome.google.com/webstore/detail/unblock-youku/pdnfnkhpgegpcingjbfihlkjeighnddk")) {
		return proxy;
	} else if (shExpMatch(url, "https://chrome.google.com/webstore/detail/unblock-youku/pdnfnkhpgegpcingjbfihlkjeighnddk*")) {
		return proxy;
	} else if (shExpMatch(url, "https://addons.mozilla.org/zh-CN/firefox/addon/unblock-youku/")) {
		return proxy;
	} else if (shExpMatch(url, "https://addons.mozilla.org/zh-CN/firefox/addon/unblock-youku/*")) {
		return proxy;
	} else if (shExpMatch(url, "https://addons.mozilla.org/en-US/firefox/addon/unblock-youku/ ")) {
		return proxy;
	} else if (shExpMatch(url, "https://addons.mozilla.org/en-US/firefox/addon/unblock-youku/*")) {
		return proxy;
	} else if (shExpMatch(url, "http://chromecj.com/fun/2014-10/228.html")) {
		return proxy;
	} else if (shExpMatch(url, "http://chromecj.com/fun/2014-10/228/download.html")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.chromemi.com/?p=649")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.lovelucy.info/unblock-youku-on-ipad.html")) {
		return proxy;
	} else if (shExpMatch(url, "http://freenuts.com/unblock-youku/")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.cr173.com/soft/49991.html")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.cncrk.com/downinfo/62447.html")) {
		return proxy;
	} else if (shExpMatch(url, "http://xiazai.zol.com.cn/detail/44/431934.shtml")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.dramaq.com.tw/unblock-youku.php")) {
		return proxy;
	} else if (shExpMatch(url, "http://www.techorz.com/software/chrome-extension-unblock-youku/")) {
		return proxy;
	} else return direct;
}
