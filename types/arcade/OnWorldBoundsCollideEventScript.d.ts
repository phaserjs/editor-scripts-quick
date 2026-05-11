import OnEventScript from "../core/OnEventScript";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class OnWorldBoundsCollideEventScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    executeChildren(body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean): void;
}
