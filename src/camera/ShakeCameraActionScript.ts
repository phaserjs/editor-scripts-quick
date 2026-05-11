
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "../animations/DurationConfigComp";
/* END-USER-IMPORTS */

export default class ShakeCameraActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public intensity: number = 0.05;
	public force: boolean = false;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const camera = this.scene.cameras.main;

		const duration = DurationConfigComp.getDuration(this, 1000);

		camera.once(Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE,
			() => this.executeChildren(...args));

		camera.shake(duration, this.intensity, this.force);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
