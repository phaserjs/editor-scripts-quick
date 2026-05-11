
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp";
import EaseConfigComp from "./EaseConfigComp";
import DelayConfigComp from "./DelayConfigComp";
/* END-USER-IMPORTS */

export default class FadeActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public fadeDirection: "FadeIn"|"FadeOut" = "FadeIn";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const sprite = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		const duration = DurationConfigComp.getDuration(this, 250);
		const delay = DelayConfigComp.getDelay(this, 0);
		const ease = EaseConfigComp.getEase(this, "Expo");

		const from = this.fadeDirection === "FadeIn" ? 0 : sprite.alpha;
		const to = this.fadeDirection === "FadeIn" ? sprite.alpha : 0;

		sprite.alpha = from;

		this.scene.add.tween({
			targets: sprite,
			alpha: { from, to },
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
