// 配置 DPlayer
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        quality: [
            {
                name: '片段 1',
                url: 'assets/videos/Naroto-Clips 1.mp4',
                type: 'normal'
            },
            {
                name: '片段 2',
                url: 'assets/videos/Naroto-Clips 2.mp4',
                type: 'normal'
            },
            {
                name: '片段 3',
                url: 'assets/videos/Naroto-Clips 3.mp4',
                type: 'normal'
            },
            {
                name: '片段 4',
                url: 'assets/videos/Naroto-Clips 4.mp4',
                type: 'normal'
            },
            {
                name: '片段 5',
                url: 'assets/videos/Naroto-Clips 5.mp4',
                type: 'normal'
            }
        ],
        defaultQuality: Math.round(Math.random() * 4)
    },
    preload: 'metadata',
    volume: 0.2,
    contextmenu: [
        {
            text: '返回导航页',
            link: 'nav.html',
        }
    ]
});