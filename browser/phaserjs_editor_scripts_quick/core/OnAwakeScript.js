// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class OnAwakeScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        this.scene.events.once("scene-awake", () => {
            this.executeChildren();
        });
        /* END-USER-CTR-CODE */
    }
}
/* END OF COMPILED CODE */
// You can write more code here
