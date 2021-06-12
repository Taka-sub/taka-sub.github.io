const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'assets/videos/Naroto-Clips '+eval(Math.floor(Math.random() * 5) + 1)+'.mp4',
        autoplay: true,
        loop: true,
        volume: 0.2
    }
});
