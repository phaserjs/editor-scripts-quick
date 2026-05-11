import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class EmitEventActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    eventName: string;
    eventEmitter: "game.events" | "scene.events" | "scene.loader" | "scene.input" | "scene.input.keyboard" | "scene.anims" | "gameObject";
    execute(...args: any[]): void;
}
