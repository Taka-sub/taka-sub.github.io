// 配置 DPlayer
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'assets/videos/Naroto-Clips '+eval(Math.floor(Math.random() * 5) + 1)+'.mp4',
        autoplay: true,
        loop: true,
        volume: 0.2
    }
});

/* 链接属性
$('a[href]').each(
	function() {
		const regex = new RegExp('taka-sub.github.io');
		if(!regex.test($(this).attr('href'))) {
			$(this).attr({'target': '_blank', 'rel': 'nofollow noopener noreferrer'});
		}else {
			$(this).removeAttr('target');
		}
	}
);*/