declare class HPlayer {
    video: HTMLVideoElement;
    togglePlayback: (state?: boolean | undefined) => void | Promise<void>;
    static version: string;
    constructor(videoElement: HTMLVideoElement);
    loadSrc: (src: string) => string;
    play: () => void | Promise<void>;
    pause: () => void | Promise<void>;
}
//# sourceMappingURL=h-player.d.ts.map