
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import AssignOpComp from "./AssignOpComp";
/* END-USER-IMPORTS */

export default class SetYActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public y: number = 0;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		obj.y = AssignOpComp.computeValue(this, obj.y, this.y);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
