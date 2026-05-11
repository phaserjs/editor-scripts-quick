
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "../animations/DurationConfigComp";
import EaseConfigComp from "../animations/EaseConfigComp";
/* END-USER-IMPORTS */

export default class ZoomCameraActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public zoom: number = 0.8;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const camera = this.scene.cameras.main;
		const duration = DurationConfigComp.getDuration(this, 1000);
		const ease = EaseConfigComp.getEase(this, "Linear");

		camera.zoomTo(this.zoom, duration, ease);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
