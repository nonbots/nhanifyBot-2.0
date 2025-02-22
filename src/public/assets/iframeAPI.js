var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "auto",
        width: "100%",
        playerVars: {
            playsinline: 1,
            enablejsapi: 1,
            loop: 1,
            autoplay: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady(_event) {
    //  event.target.playVideo();
    console.log("Player ready.");
    ws.send(JSON.stringify({ type: "player", data: { state: "ready" } }));
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        socket.send(JSON.stringify({ type: "player", data: { state: "ended" } }));
    }
}

function playSong(song) {
    player.loadVideoById(song.videoId);
}

/*
function playNhanifySong(song) {
    player.loadVideoById(song.videoId);
}
*/