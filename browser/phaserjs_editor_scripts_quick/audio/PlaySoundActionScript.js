// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import AudioLoopConfigComp from "./AudioLoopConfigComp.js";
import AudioVolumeConfigComp from "./AudioVolumeConfigComp.js";
/* END-USER-IMPORTS */
export default class PlaySoundActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    audioKey = "";
    /* START-USER-CODE */
    execute(...args) {
        const config = {};
        const loopConfig = AudioLoopConfigComp.getComponent(this);
        if (loopConfig) {
            config.loop = loopConfig.loop;
        }
        const volumeConfig = AudioVolumeConfigComp.getComponent(this);
        if (volumeConfig) {
            config.volume = volumeConfig.volume;
        }
        this.scene.sound.play(this.audioKey, config);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
