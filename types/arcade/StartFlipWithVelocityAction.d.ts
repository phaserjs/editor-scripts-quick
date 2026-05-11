import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class StartFlipWithVelocityAction extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    flipH: boolean;
    flipV: boolean;
    facingLeft: boolean;
    facingTop: boolean;
    private _flipping;
    private _targetObject?;
    execute(...args: any[]): void;
    protected update(): void;
}
