
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp";
/* END-USER-IMPORTS */

export default class PushActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	private _executing = false;

	override execute(args?: any): void {

		if (this._executing) {

			return;
		}

		this._executing = true;

		const duration = DurationConfigComp.getDuration(this, 80);

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		const { scaleX, scaleY } = obj;

		this.scene.add.tween({
			targets: obj,
			scaleX: scaleX * 0.8,
			scaleY: scaleY * 0.8,
			duration,
			yoyo: true,
			onComplete: () => {

				this._executing = false;

				this.executeChildren(args);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
