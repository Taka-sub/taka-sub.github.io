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