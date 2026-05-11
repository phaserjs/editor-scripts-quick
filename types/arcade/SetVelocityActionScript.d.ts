import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class SetVelocityActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    velocityY: number;
    execute(...args: any[]): void;
}
