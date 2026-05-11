
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import GetRandom from "./GetRandom";
import AssignOpComp from "../core/AssignOpComp";
/* END-USER-IMPORTS */

export default class SetRandomXActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		const newValue = GetRandom.getRandom(this);

		obj.x = AssignOpComp.computeValue(this, obj.x, newValue);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
