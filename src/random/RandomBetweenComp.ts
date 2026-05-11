
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from "phaser";
/* END-USER-IMPORTS */

export default class RandomBetweenComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__RandomBetweenComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): RandomBetweenComp {
		return (gameObject as any)["__RandomBetweenComp"];
	}

	private gameObject: any;
	public min: number = 0;
	public max: number = 1000;

	/* START-USER-CODE */

	getRandomBetween() {

		return Phaser.Math.Between(this.min, this.max);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
