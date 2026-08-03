document.querySelectorAll(".media-grid video").forEach((video) => {
    let hideControlsTimer;

    const showControls = () => {
        window.clearTimeout(hideControlsTimer);
        video.controls = true;
    };

    video.tabIndex = 0;

    video.addEventListener("play", () => {
        window.clearTimeout(hideControlsTimer);
        hideControlsTimer = window.setTimeout(() => {
            if (!video.paused) {
                video.controls = false;
            }
        }, 350);
    });

    video.addEventListener("pause", showControls);
    video.addEventListener("ended", showControls);

    video.addEventListener("click", () => {
        if (!video.controls && !video.paused) {
            video.pause();
        }
    });

    video.addEventListener("keydown", (event) => {
        if (event.key !== " " && event.key !== "Enter") {
            return;
        }

        event.preventDefault();

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
