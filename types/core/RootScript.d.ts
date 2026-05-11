import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
export default class RootScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    key: string;
    /**
     * Gets the RootScript object set into the game object.
     * It lookups the script node in using the `key` parameter as attribute of the game object.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used to set root script into the game object. It is `"scripts"` by default.
     * @returns The root script.
     */
    static getRoot(gameObject: Phaser.GameObjects.GameObject, key?: string): RootScript;
    /**
     * Gets the children of the root script registered in the given game object, using the given key.
     *
     * @param gameObject The game object containing the root script.
     * @param key The key used to register the root script in the game object.
     * @returns The chidlren of the root script.
     */
    static getChildren(gameObject: Phaser.GameObjects.GameObject, key?: string): ScriptNode[];
    /**
     * Gets the root script associated to the game object, using the given key.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used for registering the root script in the game object.
     * @returns The root script.
     */
    static hasRoot(gameObject: Phaser.GameObjects.GameObject, key?: string): boolean;
    protected awake(): void;
}
