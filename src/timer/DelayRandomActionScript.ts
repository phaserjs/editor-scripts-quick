
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import GetRandom from "../random/GetRandom";
/* END-USER-IMPORTS */

export default class DelayRandomActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const delay = GetRandom.getRandom(this);

		this.scene.time.addEvent({
			delay,
			callback: () => {

				this.executeChildren(...args);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
