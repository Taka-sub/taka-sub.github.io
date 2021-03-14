// 通用
var $ = mdui.$;

// 打字效果
ityped.init('#index #iTyped', {
    strings:['里·动画', '表·动画', '漫画(筹备中)', '游戏(筹备中)', '鹰小队'],
    startDelay: 500,
    backDelay:  2500,
    backSpeed:  100,
    loop: true
});

// 按钮点击监听
$('#more').on('click', function(link){
    link.preventDefault();
    mdui.dialog({
    title: '正在搭建中...',
    content: '请先访问官方哔哩哔哩或微博。',
    buttons: [
        {
            text: '关闭'
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