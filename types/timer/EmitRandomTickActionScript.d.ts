import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    private _target?;
    execute(...args: any[]): void;
    nextTick(...args: any[]): void;
}
