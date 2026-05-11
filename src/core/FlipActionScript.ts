
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FlipActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public horizontal: boolean = false;
	public vertical: boolean = false;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		if (this.horizontal) {

			obj.flipX = !obj.flipX;
		}

		if (this.vertical) {

			obj.flipY = !obj.flipY;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
