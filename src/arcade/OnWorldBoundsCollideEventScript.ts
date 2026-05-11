
// You can write more code here

/* START OF COMPILED CODE */

import OnEventScript from "../core/OnEventScript";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnWorldBoundsCollideEventScript extends OnEventScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// this (prefab fields)
		this.eventName = Phaser.Physics.Arcade.Events.WORLD_BOUNDS;
		this.eventEmitter = "scene.physics.world";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public up: boolean = true;
	public down: boolean = true;
	public left: boolean = true;
	public right: boolean = true;

	/* START-USER-CODE */

	executeChildren(body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean): void {

		if (up && this.up || down && this.down || left && this.left || right && this.right) {

			super.executeChildren(body, up, down, left, right);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
