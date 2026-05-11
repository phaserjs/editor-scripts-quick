
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import GetRandom from "../random/GetRandom";
/* END-USER-IMPORTS */

export default class EmitRandomTickActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private _target?: Phaser.GameObjects.GameObject;

	execute(...args: any[]): void {

		this._target = this.getActionTargetObject(args);

		this.nextTick(...args);
	}

	nextTick(...args: any[]) {

		const delay = GetRandom.getRandom(this);

		this.scene.time.addEvent({
			delay,
			callback: () => {

				if (this._target && !this._target.scene) {
					// don't exec children
					// if the game object is disabled
					return;
				}

				this.executeChildren(...args);

				this.nextTick(...args);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
