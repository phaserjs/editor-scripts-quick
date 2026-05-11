import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class SetScaleXActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    scaleX: number;
    execute(...args: any[]): void;
}
