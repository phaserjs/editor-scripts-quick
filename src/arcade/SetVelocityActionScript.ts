
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetVelocityActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public velocityX: number = 0;
	public velocityY: number = 0;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj: Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody =
			this.getActionTargetObject(args);

		obj.body.setVelocity(this.velocityX, this.velocityY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
