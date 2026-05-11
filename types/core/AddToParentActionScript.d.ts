import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class AddToParentActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    parentContainer: Phaser.GameObjects.Container | Phaser.GameObjects.Layer;
    execute(...args: any[]): void;
}
