// 通用
var $ = mdui.$

// 链接属性
$('a[href]').each(
	function() {
		const regex = new RegExp('taka-sub.github.io');
		if(!regex.test($(this).attr('href'))) {
			$(this).attr({'target': '_blank', 'rel': 'nofollow noopener noreferrer'});
		}else {
			$(this).removeAttr('target');
		}
	}
);

// 外网访问检测
function isWAN() {
    document.querySelectorAll('a[hidden]').forEach((elm) => {
        elm.removeAttribute('hidden')
    });
};

document.querySelector('body').innerHTML += '<img src="https://i.imgur.com/xL9Y87T.gif" onload="isWAN()" id="LANCheck" style="display: none;">'

setTimeout(function() {
    let LANCheck = document.getElementById('LANCheck');
    LANCheck.removeAttribute('src');
    LANCheck.parentNode.removeChild(LANCheck);
},1000);

// 音乐
audio.volume = 0.2;

$("#audioClicker").on("click",function() {
    let audioClicker = $('#audioClicker'),
        audio = document.querySelector('#audio')

    if(audioClicker.text() === "play_arrow") {
        audioClicker.html('<i class="mdui-icon material-icons">pause</i>');
        audio.play();
    }else {
        audioClicker.html('<i class="mdui-icon material-icons">play_arrow</i>');
        audio.pause();
    }
})