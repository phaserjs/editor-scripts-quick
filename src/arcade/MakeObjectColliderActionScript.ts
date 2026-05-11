
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MakeObjectColliderActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public collideWith!: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[];
	public overlapOnly: boolean = false;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		if (this.collideWith) {

			const actionObj = this.getActionTargetObject(args);

			const obj1 = this.getCollidingObject(actionObj);
			const obj2 = this.getCollidingObject(this.collideWith);

			if (this.overlapOnly) {

				this.scene.physics.add.overlap(obj1, obj2, this.onCollide as any, undefined, this);

			} else {

				this.scene.physics.add.collider(obj1, obj2, this.onCollide as any, undefined, this);
			}

		}
	}

	private onCollide(obj1: Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody,
		obj2: Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody) {

		this.executeChildren(obj1, obj2);
	}

	private getCollidingObject(obj: any) {

		if (obj instanceof Phaser.GameObjects.Container
			|| obj instanceof Phaser.GameObjects.Layer) {

			obj = obj.list;
		}

		return obj;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
