// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class StartSceneActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    sceneKey = "";
    /* START-USER-CODE */
    execute(...args) {
        this.scene.scene.start(this.sceneKey, ...args);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
