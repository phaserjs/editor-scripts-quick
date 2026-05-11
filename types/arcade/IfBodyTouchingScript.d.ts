import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
import ExecChildrenActionScript from "../core/ExecChildrenActionScript";
export default class IfBodyTouchingScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    elseActions: ExecChildrenActionScript;
    thenActions: ExecChildrenActionScript;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    execute(...args: any[]): void;
}
