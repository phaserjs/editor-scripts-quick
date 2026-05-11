import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class PlaySpriteAnimationActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    animationKey: string;
    ignoreIfPlaying: boolean;
    execute(...args: any[]): void;
}
