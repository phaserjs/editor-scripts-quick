import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class AlertActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    message: string;
    execute(...args: any[]): void;
}
