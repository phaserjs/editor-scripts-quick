import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class ExecActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    targetAction: ScriptNode;
    execute(...args: any[]): void;
}
