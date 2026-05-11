
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp";
import EaseConfigComp from "./EaseConfigComp";
import DelayConfigComp from "./DelayConfigComp";
/* END-USER-IMPORTS */

export default class MoveOutSceneActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public to: "LEFT"|"RIGHT"|"TOP"|"BOTTOM"|"NONE" = "NONE";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		if (!this.gameObject) {

			return;
		}

		const sprite = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		const duration = DurationConfigComp.getDuration(this, 250);
		const delay = DelayConfigComp.getDelay(this, 0);
		const ease = EaseConfigComp.getEase(this, "Expo.in");

		let { x, y } = sprite;

		switch (this.to) {

			case "LEFT":

				x = -sprite.displayWidth;
				break;

			case "RIGHT":

				x = this.scene.scale.width + sprite.displayWidth;
				break;

			case "TOP":

				y = -sprite.displayHeight;
				break;

			case "BOTTOM":

				y = this.scene.scale.height + sprite.displayHeight;
				break;
		}

		this.scene.add.tween({
			targets: sprite,
			x,
			y,
			duration,
			delay,
			ease,
			onComplete: () => {

				this.executeChildren();
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
