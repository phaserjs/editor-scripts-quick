
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CameraStartFollowActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public roundPixels: boolean = false;
	public lerpX: number = 1;
	public lerpY: number = 1;
	public offsetX: number = 0;
	public offsetY: number = 0;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args);

		const camera = this.scene.cameras.main;

		camera.startFollow(obj, this.roundPixels, this.lerpX, this.lerpY, this.offsetX, this.offsetY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
