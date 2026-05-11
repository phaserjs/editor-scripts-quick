
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from "phaser";
/* END-USER-IMPORTS */

export default class RandomInArrayComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__RandomInArrayComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): RandomInArrayComp {
		return (gameObject as any)["__RandomInArrayComp"];
	}

	private gameObject: any;
	public options: number[] = [];

	/* START-USER-CODE */

	getRandomInArray() {

		return Phaser.Utils.Array.GetRandom(this.options);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
