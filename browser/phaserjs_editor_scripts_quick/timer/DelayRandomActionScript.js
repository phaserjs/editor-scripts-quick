// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
import GetRandom from "../random/GetRandom.js";
/* END-USER-IMPORTS */
export default class DelayRandomActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const delay = GetRandom.getRandom(this);
        this.scene.time.addEvent({
            delay,
            callback: () => {
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
