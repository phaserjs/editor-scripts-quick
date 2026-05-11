
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import AssignOpComp from "./AssignOpComp";
/* END-USER-IMPORTS */

export default class SetScaleYActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public scaleY: number = 1;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		obj.scaleY = AssignOpComp.computeValue(this, obj.scaleY, this.scaleY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
