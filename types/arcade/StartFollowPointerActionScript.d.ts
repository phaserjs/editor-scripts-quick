import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class StartFollowPointerActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    speed: number;
    maxTime: number;
    private _following;
    private _targetObject?;
    execute(...args: any[]): void;
    protected update(): void;
}
