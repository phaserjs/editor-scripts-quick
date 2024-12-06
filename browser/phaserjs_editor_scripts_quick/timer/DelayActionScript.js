// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class DelayActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    delay = 0;
    /* START-USER-CODE */
    execute(...args) {
        this.scene.time.addEvent({
            delay: this.delay,
            callback: () => {
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
