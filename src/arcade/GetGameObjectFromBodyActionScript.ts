
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
import { ActionTargetComp } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GetGameObjectFromBodyActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// this (components)
		const thisActionTargetComp = new ActionTargetComp(this);
		thisActionTargetComp.target = "ARG_1";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args);

		let result;

		if (obj instanceof Phaser.GameObjects.GameObject) {

			result = obj;

		} else if (obj instanceof Phaser.Physics.Arcade.Body) {

			result = obj.gameObject;
		}

		if (result) {

			this.executeChildren(result);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
