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
        position: 'right-bottom'
    });
};

document.querySelector('body').innerHTML += '<img src="https://i.imgur.com/xL9Y87T.gif" onload="isWAN()" id="WANCheck" style="display: none;">'

setTimeout(function() {
    let WANCheck = document.getElementById('WANCheck');
    WANCheck.removeAttribute('src');
    WANCheck.parentNode.removeChild(WANCheck);
},1000);

// 音乐
const ap = new APlayer({
    container: document.getElementById('player'),
    autoplay: false,
    loop: 'one',
    order: 'random',
    preload: 'metadata',
    volume: 0.2,
    fixed: true,
    lrcType: 3,
    audio: [
        { //《School Days - NicolArmarfi》，来自开源 GalGame《片轮少女》。(https://www.katawa-shoujo.com/download.php)
            name: 'School Days(校园日)',
            artist: 'NicolArmarfi',
            url: 'assets/audios/1-06 School Days.mp3',
            cover: 'assets/audios/1-06 School Days.png',
            lrc: 'assets/audios/1-06 School Days.lrc',
            theme: '#d1b993'
        },
        { //《春日花语 铺调》，来自万代南梦宫娱乐《火影忍者 究极风暴3》。(https://store.steampowered.com/app/234670/NARUTO_SHIPPUDEN_Ultimate_Ninja_STORM_3_Full_Burst_HD/)
            name: '春日花语 铺调',
            artist: '未知',
            url: 'assets/audios/春日花语 辅调二循环.mp3',
            lrc: 'assets/audios/春日花语 辅调二循环.lrc'
        },
        { //《领风者 - 南征北战NZBZ》，来自国创动画《领风者》。(https://www.bilibili.com/bangumi/media/md4313622)
            name: '领风者',
            artist: '南征北战NZBZ',
            url: 'assets/audios/领风者 - 南征北战NZBZ.mp3',
            cover: 'assets/audios/领风者 - 南征北战NZBZ.jpg',
            lrc: 'assets/audios/领风者 - 南征北战NZBZ.lrc',
            theme: '#618fc0'
        },
        { //《夜行少女 - 小野道ono Feat.花近》，2017 年 Bilibili 拜年祭节目之一。(https://www.bilibili.com/video/BV1Xx41117Tz)
            name: '夜行少女',
            artist: '小野道ono Feat.花近',
            url: 'assets/audios/夜行少女 - 小野道ono Feat.花近.mp3',
            cover: 'assets/audios/夜行少女 - 小野道ono Feat.花近.jpg',
            lrc: 'assets/audios/夜行少女 - 小野道ono Feat.花近.lrc',
            theme: '#f56282'
        }
    ]
});

ap.on('play', function () {
    let title = document.querySelector('#player .aplayer-title'),
        audioIntro = '',
        audioLink = '';

    if(title.textContent == 'School Days(校园日)') {
        audioIntro = '《School Days - NicolArmarfi》，来自开源 GalGame《片轮少女》。',
        audioLink = 'https://www.katawa-shoujo.com/download.php';
    }else if(title.textContent == '春日花语 铺调') {
        audioIntro = '《春日花语 铺调》，来自万代南梦宫娱乐《火影忍者 究极风暴3》。',
        audioLink = 'https://store.steampowered.com/app/234670/NARUTO_SHIPPUDEN_Ultimate_Ninja_STORM_3_Full_Burst_HD/';
    }else if(title.textContent == '领风者') {
        audioIntro = '《领风者 - 南征北战NZBZ》，来自国创动画《领风者》。',
        audioLink = 'https://www.bilibili.com/bangumi/media/md4313622';
    }else if(title.textContent == '夜行少女') {
        audioIntro = '《夜行少女 - 小野道ono Feat.花近》，2017 年 Bilibili 拜年祭节目之一。';
        audioLink = 'https://www.bilibili.com/video/BV1Xx41117Tz';
    }else {
        audioIntro = '等一下，这好像有点不对。你对我做了什么？！';
        audioLink = 'https://cn.bing.com/?ensearch=1';
    }

    mdui.snackbar({
        message: audioIntro,
        position: 'right-bottom',
        buttonText: '更多信息',
        onButtonClick: function(){
            window.open(audioLink, '_blank')
        }
    });
});

// ap.lrc.hide()