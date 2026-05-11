
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
import ExecChildrenActionScript from "../core/ExecChildrenActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class IfBodyTouchingScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// elseActions
		const elseActions = new ExecChildrenActionScript(this);

		// thenActions
		const thenActions = new ExecChildrenActionScript(this);

		this.elseActions = elseActions;
		this.thenActions = thenActions;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public elseActions: ExecChildrenActionScript;
	public thenActions: ExecChildrenActionScript;
	public left: boolean = false;
	public right: boolean = false;
	public up: boolean = false;
	public down: boolean = false;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj: Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody
			= this.getActionTargetObject(args);

		const { left, right, up, down } = obj.body.touching;

		if (this.left && left
			|| this.right && right
			|| this.up && up
			|| this.down && down) {

			this.thenActions.executeChildren(...args);

		} else {

			this.elseActions.executeChildren(...args);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
