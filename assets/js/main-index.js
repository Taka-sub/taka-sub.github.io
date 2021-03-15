// 通用
var $ = mdui.$;

// 打字效果
ityped.init('#index #iTyped', {
    strings:['里·动画', '表·动画'/*, '漫画(筹备中)', '游戏(筹备中)'*/, '鹰小队'],
    startDelay: 500,
    backDelay:  2500,
    backSpeed:  100,
    loop: true
});

// 按钮点击监听
$('#more').on('click', function(link){
    link.preventDefault();
    mdui.dialog({
    title: '内容页正在搭建中...',
    content: '请先访问官方哔哩哔哩或微博。',
    buttons: [
        {
            text: '预览',
            onClick: function() {
                window.open('2021.html','_blank');
            }
        },
        {
            text: '微博',
            onClick: function() {
                window.open('https://m.weibo.cn/u/7369491931','_blank');
            }
        },
        {
        text: '哔哩哔哩',
            onClick: function() {
                window.open('https://space.bilibili.com/343162729/dynamic','_blank');
            }
        }
    ]
    });
});

// 外网访问检测
function isWAN() {
    mdui.snackbar({
        message: '成功访问外网。',
        position: 'left-bottom',
        timeout: '3000'
    });
    $('.mdui-btn').removeClass('mdui-invisible');
    rmWANCheck()
};
function isLAN() {
    mdui.snackbar({
        message: '外网访问失败。此站点内容可能不适合你所在的国家或地区。',
        position: 'left-bottom',
        timeout: '7000',
    });
    rmWANCheck()
};
function rmWANCheck() {
    document.getElementById('LANCheck').removeAttribute('src');
    $('#LANCheck').remove();
};

$('body').append('<img src="https://i.imgur.com/xL9Y87T.gif" onload="isWAN()" onerror="isLAN()" id="LANCheck" style="display: none;">');
