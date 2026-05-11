
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartFlipWithVelocityAction extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public flipH: boolean = false;
	public flipV: boolean = false;
	public facingLeft: boolean = false;
	public facingTop: boolean = false;

	/* START-USER-CODE */

	private _flipping = false;
	private _targetObject?: Phaser.GameObjects.GameObject & Phaser.GameObjects.Components.Flip;

	execute(...args: any[]): void {

		this._targetObject = this.getActionTargetObject(args);
		this._flipping = true;
	}

	protected update(): void {

		if (!this._targetObject || !this._flipping || !this._targetObject.body) {

			return;
		}

		const { x, y } = this._targetObject.body.velocity;


		if (this.flipH && x !== 0) {

			if (this.facingLeft) {

				this._targetObject.flipX = x > 0;

			} else {

				this._targetObject.flipX = x < 0;
			}
		}

		if (this.flipV && y !== 0) {

			if (this.facingTop) {

				this._targetObject.flipY = y > 0;

			} else {

				this._targetObject.flipY = y < 0;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
