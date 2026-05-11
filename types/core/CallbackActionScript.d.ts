import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class CallbackActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    callback: (...args: any[]) => void;
    execute(...args: any[]): void;
}
