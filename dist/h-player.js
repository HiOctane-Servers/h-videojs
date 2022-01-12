"use strict";
class HPlayer {
    constructor(videoElement) {
        var _a;
        this.loadSrc = (src) => {
            const { video } = this;
            video.src = src;
            video.load();
            return src;
        };
        this.play = () => this.togglePlayback(true);
        this.pause = () => this.togglePlayback(false);
        const video = videoElement;
        this.video = video;
        const assets = {
            icon: {
                play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M8 5v14l11-7z"></path></svg>',
                pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>',
                loading: '<i></i>',
                replay: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>',
                fsMax: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>',
                fsMin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></svg>',
                volume: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>',
                volL50: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></svg>',
                volL25: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></svg>',
                mute: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>',
            },
        };
        const playerContainer = document.createElement('div');
        playerContainer.classList.add('h-player');
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('h-player-media-wrapper');
        (_a = video.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(playerContainer, video);
        videoWrapper.appendChild(video);
        const videoWidth = video.getAttribute('width') || '100%', videoHeight = video.getAttribute('height') || '100%';
        playerContainer.style.setProperty('--h-width', videoWidth);
        playerContainer.style.setProperty('--h-height', videoHeight);
        video.removeAttribute('controls');
        video.removeAttribute('width');
        video.removeAttribute('height');
        const playerControls = document.createElement('div');
        playerControls.classList.add('h-player-controls');
        const playbackControls = document.createElement('div');
        playbackControls.classList.add('h-playback-controls');
        const playbackButton = document.createElement('button');
        playbackButton.classList.add('h-playback-button');
        playbackControls.appendChild(playbackButton);
        const controlsContainer = document.createElement('div');
        controlsContainer.classList.add('h-controls-container');
        const mainControls = document.createElement('div');
        mainControls.classList.add('h-controls-main');
        const controlsLeft = document.createElement('div');
        controlsLeft.classList.add('h-controls-l-main');
        const controlsRight = document.createElement('div');
        controlsRight.classList.add('h-controls-r-main');
        const seekbar = document.createElement('div');
        seekbar.classList.add('h-seekbar');
        const seekbarContainer = document.createElement('div');
        seekbarContainer.classList.add('h-seekbar-container');
        const seekbarBuffered = document.createElement('div');
        seekbarBuffered.classList.add('h-seekbar-buffered');
        const seekbarFancy = document.createElement('div');
        seekbarFancy.classList.add('h-seekbar-fancy');
        const seekbarInput = document.createElement('input');
        seekbarInput.classList.add('h-seekbar-input');
        seekbarInput.type = 'range';
        seekbarInput.step = '0.1';
        seekbarInput.value = '0';
        seekbarContainer.appendChild(seekbarBuffered);
        seekbarContainer.appendChild(seekbarFancy);
        seekbarContainer.appendChild(seekbarInput);
        seekbar.appendChild(seekbarContainer);
        const playerTimeContainer = document.createElement('div');
        playerTimeContainer.classList.add('h-player-time-container');
        const playerTime = document.createElement('div');
        playerTime.classList.add('h-player-time');
        const timeCurrent = document.createElement('span');
        timeCurrent.classList.add('h-time-current');
        timeCurrent.textContent = '0:00';
        const timeSplit = document.createElement('span');
        timeSplit.classList.add('h-time-split');
        timeSplit.textContent = ' / ';
        const timeDuration = document.createElement('span');
        timeDuration.classList.add('h-time-duration');
        timeDuration.textContent = '0:00';
        playerTime.appendChild(timeCurrent);
        playerTime.appendChild(timeSplit);
        playerTime.appendChild(timeDuration);
        playerTimeContainer.appendChild(playerTime);
        const fullscreenHandler = document.createElement('div');
        fullscreenHandler.classList.add('h-fullscreen-handler');
        const fullscreenButton = document.createElement('button');
        fullscreenButton.classList.add('h-fullscreen-button');
        fullscreenButton.title = 'Full screen';
        fullscreenButton.innerHTML = assets.icon.fsMax;
        fullscreenHandler.appendChild(fullscreenButton);
        const volumeControls = document.createElement('div');
        volumeControls.classList.add('h-volume-controls');
        const volumeButton = document.createElement('button');
        volumeButton.classList.add('h-volume-toggle');
        volumeButton.title = 'Mute';
        volumeButton.innerHTML = assets.icon.volume;
        const volumeInputContainer = document.createElement('div');
        volumeInputContainer.classList.add('h-volume-input-container');
        const volumeFancy = document.createElement('div');
        volumeFancy.classList.add('h-volume-fancy');
        volumeFancy.style.width = '100%';
        const volumeInput = document.createElement('input');
        volumeInput.classList.add('h-volume-input');
        volumeInput.type = 'range';
        volumeInput.step = '0.1';
        volumeInput.value = '100';
        volumeInputContainer.appendChild(volumeInput);
        volumeInputContainer.appendChild(volumeFancy);
        volumeControls.appendChild(volumeInputContainer);
        volumeControls.appendChild(volumeButton);
        controlsLeft.appendChild(playerTimeContainer);
        controlsRight.appendChild(volumeControls);
        controlsRight.appendChild(fullscreenHandler);
        mainControls.appendChild(seekbar);
        mainControls.appendChild(controlsLeft);
        mainControls.appendChild(controlsRight);
        controlsContainer.appendChild(seekbar);
        controlsContainer.appendChild(mainControls);
        playerControls.appendChild(playbackControls);
        playerControls.appendChild(controlsContainer);
        playerContainer.appendChild(videoWrapper);
        playerContainer.appendChild(playerControls);
        const showControls = (state) => {
            const { classList } = playerControls;
            if (state == true)
                classList.remove('hidden');
            else
                classList.add('hidden');
            return state;
        };
        const playbackState = (state) => {
            if (state != 'loading') {
                const icon = state == 'pause' ? 'play' : 'pause', title = state == 'pause' ? 'Play' : 'Pause';
                playbackButton.classList.remove('loading');
                playbackButton.title = title;
                playbackButton.innerHTML = assets.icon[icon];
            }
            if (state == 'loading') {
                playbackButton.classList.add('loading');
                playbackButton.innerHTML = assets.icon.loading;
            }
            if (state == 'finished') {
                showControls(true);
                playbackButton.title = 'Replay';
                playbackButton.innerHTML = assets.icon.replay;
            }
            return state;
        };
        playbackState('pause');
        var playbackPromise = undefined;
        const togglePlayback = (state) => {
            const { video } = this;
            const doPlaybackState = state || video.paused;
            if (doPlaybackState) {
                playbackState('play');
                return (playbackPromise = video.play());
            }
            else {
                playbackState('pause');
                if (playbackPromise != undefined)
                    playbackPromise.then(() => video.pause());
                else
                    return video.pause();
            }
        };
        this.togglePlayback = togglePlayback;
        const timeString = (time) => {
            const hour = Math.floor(time / 3600), mins = Math.floor((time % 3600) / 60), secs = Math.floor(time % 60);
            if (isNaN(hour + mins + secs))
                return '0:00';
            const str = [
                hour.toString(),
                mins.toString(),
                secs.toString().padStart(2, '0'),
            ];
            const stringOutput = str.map((str, i) => {
                if (i == 0)
                    return str != '0' ? str + ':' : undefined;
                if (i == 1) {
                    if (hour > 0)
                        return str.padStart(2, '0') + ':';
                    return str + ':';
                }
                return str;
            });
            return stringOutput.join('');
        };
        const playerFullscreenHandler = async (goFullscreen) => {
            const fullscreenFunction = (fullscreen) => {
                if (fullscreen == true && !document.fullscreenElement) {
                    fullscreenButton.title = 'Exit full screen';
                    fullscreenButton.innerHTML = assets.icon.fsMin;
                    return playerContainer.requestFullscreen();
                }
                if (fullscreen == false && document.fullscreenElement) {
                    fullscreenButton.title = 'Full screen';
                    fullscreenButton.innerHTML = assets.icon.fsMax;
                    return document.exitFullscreen();
                }
            };
            if (goFullscreen)
                return fullscreenFunction(goFullscreen);
            return fullscreenFunction(!document.fullscreenElement);
        };
        video.addEventListener('play', () => playbackState('play'));
        video.addEventListener('pause', () => playbackState('pause'));
        video.addEventListener('ended', () => playbackState('finished'));
        video.addEventListener('loadedmetadata', () => {
            timeDuration.textContent = timeString(video.duration);
        });
        video.addEventListener('timeupdate', () => {
            if (!isNaN(video.duration)) {
                const { currentTime, duration } = video;
                const seekbarValue = (currentTime / duration) * 1e2;
                seekbarInput.value = seekbarValue.toString();
                seekbarFancy.style.width = seekbarValue + '%';
            }
            timeCurrent.textContent = timeString(video.currentTime);
        });
        video.addEventListener('progress', () => {
            const { currentTime, duration, buffered } = video;
            if (isNaN(duration))
                return;
            for (let i = 0; i < buffered.length; i++) {
                const bufferStart = buffered.start(buffered.length - 1 - i);
                const bufferEnd = buffered.end(buffered.length - 1 - i);
                if (bufferStart < currentTime) {
                    const bufferTotal = (bufferEnd / video.duration) * 1e2;
                    seekbarBuffered.style.width = bufferTotal + '%';
                    break;
                }
            }
        });
        video.addEventListener('waiting', () => playbackState('loading'));
        video.addEventListener('canplay', () => {
            if (video.paused)
                playbackState('pause');
            else
                playbackState('play');
        });
        playerContainer.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fullscreenButton.title = 'Full screen';
                fullscreenButton.innerHTML = assets.icon.fsMax;
            }
        });
        playerContainer.addEventListener('click', (e) => {
            if (e.target == playbackControls) {
                if (playerControls.classList.contains('hidden'))
                    showControls(true);
                else
                    showControls(false);
            }
        });
        playerContainer.addEventListener('mousemove', () => {
            showControls(true);
        });
        playerContainer.addEventListener('mouseenter', () => {
            showControls(true);
        });
        playerContainer.addEventListener('mouseleave', () => {
            if (!video.paused)
                showControls(false);
        });
        playbackButton.addEventListener('click', async () => {
            await togglePlayback();
        });
        seekbarInput.addEventListener('input', (e) => {
            if (isNaN(video.duration) == false) {
                const { value } = seekbarInput;
                seekbarFancy.style.width = value + '%';
                const time = (Number(value) / 1e2) * video.duration;
                video.currentTime = time;
                timeCurrent.textContent = timeString(time);
            }
        });
        const updateVolume = (volume) => {
            if (volume > 0) {
                volumeButton.title = 'Mute';
                if (volume > 5e-1)
                    volumeButton.innerHTML = assets.icon.volume;
                if (volume < 5e-1)
                    volumeButton.innerHTML = assets.icon.volL50;
                if (volume < 25e-2)
                    volumeButton.innerHTML = assets.icon.volL25;
            }
            if (volume == 0) {
                volumeButton.title = 'Unmute';
                volumeButton.innerHTML = assets.icon.mute;
            }
        };
        video.addEventListener('volumechange', () => {
            const { volume } = video;
            volumeInput.value = volume * 1e2 + '%';
            volumeFancy.style.width = volume * 1e2 + '%';
            updateVolume(volume);
        });
        video.volume = 1;
        var previousVolume = video.volume;
        volumeButton.addEventListener('click', () => {
            if (video.volume <= 0) {
                video.volume = previousVolume || 1;
            }
            else {
                previousVolume = video.volume;
                video.volume = 0;
            }
        });
        volumeInput.addEventListener('input', () => {
            const volume = Number(volumeInput.value);
            video.volume = volume / 1e2;
        });
        fullscreenButton.addEventListener('click', async () => {
            await playerFullscreenHandler();
        });
    }
}
HPlayer.version = '2.0.0';
(() => {
    let Window = window;
    Window.HPlayer = HPlayer;
})();
//# sourceMappingURL=h-player.js.map