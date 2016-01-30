function FindProxyForURL(url, host) {
	if (isPlainHostName(host)) return "DIRECT";
	else if (shExpMatch(host, "localhost.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i0.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i1.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i2.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i3.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i4.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i5.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i6.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i7.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i8.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i9.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "cntv.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "letv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "lecloud.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "lesports.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "m.video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "player.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "list.video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "v.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "m.v.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "film.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "sports.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "xw.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "v.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "sports.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "v.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "video.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "sports.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "sports.sina.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "sports.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "cbachina.sports.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "m.tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "film.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "m.film.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "live.tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "v.ifeng.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "vip.v.ifeng.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "qiyi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "iqiyi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "youku.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "tudou.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "hunantv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "account.bilibili.com")) {
		return "PROXY ttigwh02:3128"
	} else if (shExpMatch(host, "*.bilibili.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "tiantian.tv")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "04stream.tv")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "kankan.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "pptv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "56.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "wasu.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "ku6.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "joy.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "aipai.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "baomihua.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "narutom.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "m.y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "i.y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "music.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "music.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "xiami.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "douban.fm")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "duomi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "kugou.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "kuwo.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "yinyuetai.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.localhost.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i0.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i1.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i2.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i3.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i4.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i5.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i6.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i7.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i8.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i9.letvimg.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.cntv.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.letv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.lecloud.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.lesports.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.m.video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.player.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.list.video.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.v.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.m.v.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.film.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.sports.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.xw.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.v.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.sports.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.v.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.video.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.sports.sina.com.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.sports.sina.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.sports.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.cbachina.sports.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.m.tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.film.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.m.film.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.live.tv.sohu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.v.ifeng.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.vip.v.ifeng.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.qiyi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.iqiyi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.youku.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.tudou.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.hunantv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.bilibili.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.tiantian.tv")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.04stream.tv")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.kankan.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.pptv.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.56.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.wasu.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.ku6.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.joy.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.aipai.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.baomihua.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.narutom.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.m.y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.i.y.qq.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.music.baidu.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.music.163.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.music.126.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.xiami.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.douban.fm")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.duomi.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.kugou.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.kuwo.cn")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.yinyuetai.com")) {
		return "PROXY 124.200.100.50:8080"
	} else if (shExpMatch(host, "*.acgvideo.com")) {
		return "PROXY 124.200.100.50:8080"
	} else return "PROXY ttigwh02:3128"
}
