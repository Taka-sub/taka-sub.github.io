// 通用
var $ = mdui.$

// 深色模式切换
$("#DarkMode").on("click",function() {
    $("body").toggleClass("mdui-theme-layout-dark");
})

// 链接属性
document.querySelector('body').addEventListener('DOMNodeInserted', function() {
    document.querySelectorAll('a[href]').forEach((link) => {
        const regex = new RegExp('taka-sub.github.io');
        if(!regex.test(link.href)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'nofollow noopener noreferrer');
            console.log('链接属性 > 非本地链接“ '+link.href+' ”，以为其添加相关属性。')
        }else {
            link.setAttribute('target', '_self');
            console.log('链接属性 > 本地链接“ '+link.href+' ”。')
        }
    });
});

// 写入抽屉栏导航
$('#drawer').html('<ul class="mdui-list">\
        <li class="mdui-subheader">年份</li>\
        <a href="2021.html"><li class="mdui-list-item mdui-ripple mdui-list-item-active">2021年</li></a>\
        <a href="2020.html"><li class="mdui-list-item mdui-ripple">2020年</li></a>\
    </ul>\
    <ul class="mdui-list">\
        <li class="mdui-subheader">传送门</li>\
        <a hidden href="https://t.me/joinchat/VIDkLgNgoSsWYM4Z"><li class="mdui-list-item mdui-ripple">Telegram 群组</li></a>\
        <a href="https://jq.qq.com/?_wv=1027&k=lon6Dfsc"><li class="mdui-list-item mdui-ripple">QQ 群组</li></a>\
        <a hidden href="https://nyaa.si/user/ointment"><li class="mdui-list-item mdui-ripple">Nyaa·表区</li></a>\
        <a hidden href="https://sukebei.nyaa.si/user/ointment"><li class="mdui-list-item mdui-ripple">Nyaa·里区</li></a>\
        <a href="https://space.bilibili.com/343162729/dynamic"><li class="mdui-list-item mdui-ripple">哔哩哔哩</li></a>\
        <a href="https://m.weibo.cn/u/7369491931"><li class="mdui-list-item mdui-ripple">微博</li></a>\
    </ul>\
    <ul class="mdui-list">\
        <li class="mdui-subheader">其他</li>\
        <a href="Tools.html"><li class="mdui-list-item mdui-ripple">工具集</li></a>\
    </ul>\
    <div class="copyright">\
        <p>&copy; 2021 Taka.sub</p>\
        <p>Powered by <a href="https://mdui.org" target="_blank">MDUI</a> &amp; <a href="https://www.muicss.com" target="_blank">MUI</a> &amp; <a href="https://github.com/luisvinicius167/ityped" target="_blank">iTyped</a></p>\
    </div>')

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