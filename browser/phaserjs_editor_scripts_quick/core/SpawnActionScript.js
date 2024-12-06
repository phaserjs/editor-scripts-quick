// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "../../phaserjs_editor_scripts_base/index.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class SpawnActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    objectPrefab;
    spawnInParentPosition = true;
    /* START-USER-CODE */
    execute(...args) {
        if (!this.objectPrefab) {
            return;
        }
        const obj = new this.objectPrefab(this.scene);
        this.scene.events.emit("scene-awake");
        if (this.spawnInParentPosition) {
            const sprite = this.getActionTargetObject(args);
            obj.x = sprite.x;
            obj.y = sprite.y;
        }
        this.scene.add.existing(obj);
        this.executeChildren(obj);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
