//
// src/global.d.ts
//

// Import types for THEOplayer
import theoplayer from "theoplayer";

declare global {
    interface Window {
        THEOplayer: typeof theoplayer;
    }
}
