import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class CameraStartFollowActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    roundPixels: boolean;
    lerpX: number;
    lerpY: number;
    offsetX: number;
    offsetY: number;
    execute(...args: any[]): void;
}
