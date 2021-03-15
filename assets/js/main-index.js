// 打字效果
ityped.init('#index #iTyped', {
    strings:['里·动画', '表·动画'/*, '漫画(筹备中)', '游戏(筹备中)'*/, '鹰小队'],
    startDelay: 500,
    backDelay:  2500,
    backSpeed:  100,
    loop: true
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
