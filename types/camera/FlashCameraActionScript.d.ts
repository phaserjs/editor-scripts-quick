import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class FlashCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    color: string;
    execute(...args: any[]): void;
}
