
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetVelocityYActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public velocityY: number = 0;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj: Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody =
			this.getActionTargetObject(args);

		obj.body.setVelocityY(this.velocityY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
