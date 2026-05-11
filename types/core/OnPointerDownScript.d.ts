import OnEventScript from "./OnEventScript";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class OnPointerDownScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    awake(): void;
}
