
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartFollowPointerActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public speed: number = 60;
	public maxTime: number = 0;

	/* START-USER-CODE */

	private _following = false;
	private _targetObject?: Phaser.GameObjects.GameObject;

	execute(...args: any[]): void {

		this._following = true;
		this._targetObject = this.getActionTargetObject(args);
	}

	protected update(): void {

		if (!this._following || !this._targetObject) {

			return;
		}

		const pointer = this.scene.input.activePointer;

		this.scene.physics.moveTo(this._targetObject, pointer.x, pointer.y, this.speed, this.maxTime);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
