import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class ShakeCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    intensity: number;
    force: boolean;
    execute(...args: any[]): void;
}
