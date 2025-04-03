// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class PlaySpriteAnimationActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    animationKey = "";
    ignoreIfPlaying = false;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.once("animationcomplete-" + this.animationKey, () => this.executeChildren(...args));
        obj.play(this.animationKey, this.ignoreIfPlaying);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
