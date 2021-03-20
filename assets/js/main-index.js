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

// 打字效果
ityped.init('#index #iTyped', {
    strings:['里·动画', '表·动画'/*, '漫画(筹备中)', '游戏(筹备中)'*/, '鹰小队'],
    startDelay: 500,
    backDelay:  2500,
    backSpeed:  100,
    loop: true
});