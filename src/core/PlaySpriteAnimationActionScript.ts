
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlaySpriteAnimationActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public animationKey: string = "";
	public ignoreIfPlaying: boolean = false;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj: Phaser.GameObjects.Sprite = this.getActionTargetObject(args);

		obj.once("animationcomplete-" + this.animationKey, () => this.executeChildren(...args));
		obj.play(this.animationKey, this.ignoreIfPlaying);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
