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
    document.querySelectorAll('[hidden]').forEach((elm) => {
        elm.removeAttribute('hidden');
    });
    mdui.snackbar({
        message: '检测到外网访问成功，更多链接被解锁。',
        position: 'left-bottom'
    });
};

document.querySelector('body').innerHTML += '<img src="https://i.imgur.com/xL9Y87T.gif" onload="isWAN()" id="WANCheck" style="display: none;">'

setTimeout(function() {
    let WANCheck = document.getElementById('WANCheck');
    WANCheck.removeAttribute('src');
    WANCheck.parentNode.removeChild(WANCheck);
},1000);

// 音乐
audio.volume = 0.2;

$("#audioClicker").on("click",function() {
    let audioClicker = $('#audioClicker')

    if(audioClicker.text() === "play_arrow") {
        audioClicker.html('<i class="mdui-icon material-icons">pause</i>');
        audio.play();
        // mdui.snackbar({
        //     message: '正在播放的作品为《School Days - NicolArmarfi》，来自开源 GalGame《片轮少女》。',
        //     position: 'left-bottom',
        //     buttonText: '获取游戏',
        //     closeOnButtonClick: false,
        //     onButtonClick: function() {
        //         window.open('https://www.katawa-shoujo.com/download.php', '_blank');
        //     }
        // });
        mdui.snackbar({
            message: '正在播放的作品为《春日花语 铺调》，来自万代南梦宫娱乐《火影忍者 究极风暴3》。',
            position: 'left-bottom',
            buttonText: '获取游戏',
            closeOnButtonClick: false,
            onButtonClick: function() {
                window.open('https://store.steampowered.com/app/234670/NARUTO_SHIPPUDEN_Ultimate_Ninja_STORM_3_Full_Burst_HD/', '_blank');
            }
        });
    }else {
        audioClicker.html('<i class="mdui-icon material-icons">play_arrow</i>');
        audio.pause();
    }
})