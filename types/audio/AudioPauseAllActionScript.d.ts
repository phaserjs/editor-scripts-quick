import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class AudioPauseAllActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}
