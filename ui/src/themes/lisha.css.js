const stylesheet = `
/* Bright pink accent (#ff69b4) for loading spinner, icons, etc. */
.react-jinke-music-player-main.lisha-theme .loading svg {
    color: #ff69b4;
    font-size: 24px;
}

/* Accent color for mobile tooltips */
.react-jinke-music-player-mobile-play-model-tip {
    background-color: #ff69b4;
}

/* Accent color for slider handle and track */
.react-jinke-music-player-main.lisha-theme .music-player-panel .panel-content .rc-slider-handle, 
.react-jinke-music-player-main.lisha-theme .music-player-panel .panel-content .rc-slider-track {
    background-color: #ff69b4;
}

/* Active song text/icon color */
.react-jinke-music-player-main.lisha-theme .audio-item.playing svg,
.react-jinke-music-player-main.lisha-theme .audio-item.playing .player-singer,
.audio-lists-panel-content .audio-item.playing svg {
    color: #ff69b4 !important;
}

/* Scrollbar thumb accent */
.react-jinke-music-player-main.lisha-theme ::-webkit-scrollbar-thumb {
    background-color: #ff69b4;
}

/* Icons default and hover states */
.react-jinke-music-player-main.lisha-theme svg,
.react-jinke-music-player-main.lisha-theme svg:active,
.react-jinke-music-player-main.lisha-theme svg:hover {
    color: #ff69b4;
}

/* Slider rail background */
.react-jinke-music-player-main.lisha-theme .rc-slider-rail {
    background-color: rgba(241, 219, 220, 0.3) !important;
}

/* Bottom bar (player controller) uses the "next layer" color (#ec9999) */
.react-jinke-music-player-main.lisha-theme .music-player-controller {
    background-color: #ec9999;
    border-color: #ec9999;
}

/* Main player panel color (#ec9999) */
.react-jinke-music-player-main.lisha-theme .music-player-panel {
    background-color: #ec9999;
    box-shadow: 0 1px 2px 0 rgba(0, 34, 77, .05);
    color: #ff69b4;
}

/* Image shadow within the player panel */
.react-jinke-music-player-main.lisha-theme .music-player-panel .img-content {
    box-shadow: 0 0 10px #dcdcdc;
}

/* Progress bar load area */
.react-jinke-music-player-main.lisha-theme .music-player-panel .progress-load-bar {
    background-color: rgba(241, 219, 220, 0.5) !important;
}

/* Switch toggles */
.react-jinke-music-player-main.lisha-theme .rc-switch {
    color: #f1dbdc;
}
.react-jinke-music-player-main.lisha-theme .rc-switch:after {
    background-color: #f1dbdc;
}
.react-jinke-music-player-main.lisha-theme .rc-switch-checked {
    background-color: #ff69b4 !important;
    border: 1px solid #ff69b4;
}
.react-jinke-music-player-main.lisha-theme .rc-switch-inner {
    color: #f1dbdc;
}

/* Lists button on the player */
.react-jinke-music-player-main.lisha-theme .audio-lists-btn {
    background-color: #f1dbdc !important;
}
.react-jinke-music-player-main.lisha-theme .audio-lists-btn:active, 
.react-jinke-music-player-main.lisha-theme .audio-lists-btn:hover {
    background-color: #ffdde1;
    color: #ec9999;
}

/* Audio lists panel background */
.react-jinke-music-player-main.lisha-theme .audio-lists-panel {
    background-color: #f1dbdc;
    box-shadow: 0 0 2px #dcdcdc;
    color: #000;
}

/* Each audio item background and states */
.react-jinke-music-player-main.lisha-theme .audio-lists-panel .audio-item {
    background-color: #f1dbdc;
}
.react-jinke-music-player-main.lisha-theme .audio-lists-panel .audio-item:nth-child(odd) {
    background-color: #ffdde1 !important;
}
.react-jinke-music-player-main.lisha-theme .audio-lists-panel .audio-item.playing {
    background-color: #ffdde1 !important;
}
`

export default stylesheet