
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import AudioLoopConfigComp from "./AudioLoopConfigComp";
import AudioVolumeConfigComp from "./AudioVolumeConfigComp";
/* END-USER-IMPORTS */

export default class PlaySoundActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public audioKey: string = "";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const config: Phaser.Types.Sound.SoundConfig = {};

		const loopConfig = AudioLoopConfigComp.getComponent(this);

		if (loopConfig) {

			config.loop = loopConfig.loop;
		}

		const volumeConfig = AudioVolumeConfigComp.getComponent(this);

		if (volumeConfig) {

			config.volume = volumeConfig.volume;
		}

		this.scene.sound.play(this.audioKey, config);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
