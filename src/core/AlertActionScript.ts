
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AlertActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public message: string = "";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		alert(this.message);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
