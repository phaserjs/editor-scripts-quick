
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ConsoleLogActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public message: string = "";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		console.log(this.message);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
