
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SpawnActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public objectPrefab!: any;
	public spawnInParentPosition: boolean = true;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		if (!this.objectPrefab) {

			return;
		}

		const obj = new this.objectPrefab(this.scene);

		this.scene.events.emit("scene-awake");

		if (this.spawnInParentPosition) {

			const sprite = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;
			obj.x = sprite.x;
			obj.y = sprite.y;
		}

		this.scene.add.existing(obj);

		this.executeChildren(obj);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
