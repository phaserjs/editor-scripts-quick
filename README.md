# Quick Phaser Editor scripts

This project contains a collection of scripts to use with a Phaser Editor project. The scripts cover different areas of a game development, like animations, timer, random functions, audio, camera, and others. We name this "Quick" because it is focused on provide scripts that help the user to build simple behaviors in a faster way. We think this library is more suitable to prototype projects or for using in specific areas of the game, like UI navigation.

This library is in active development and experimental.

## Installing (NPM)

Install this package in your game:

```
npm install @phaserjs/editor-scripts-quick
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-base",
        "@phaserjs/editor-scripts-quick"
        ]
}
```

As you can see, this library depends on the `@phaserjs/editor-scripts-base` library, that is usually installed in the project templates.

## Installing (vanilla JS)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files and JavaScript files.

**Note:** Since this project has a dependency on the `@phaserjs/editor-scripts-base` library, the generated `phaserjs_editor_scripts_quick` folder must be placed next to the `phaserjs_editor_scripts_base` folder in order for the relative imports to resolve properly.

## Summary

The scripts split in groups:

* [Core](#core-group)
* [Arcade](#arcade-group)
* [Animations](#animations-group)
* [Audio](#audio-group)
* [Camera](#camera-group)
* [Random](#random-group)
* [Timer](#timer-group)

Each group contains script nodes and user components. The script nodes can be classified in Actions and Events.

An Action script performs that, an action, a call to a method, like destroying an object, or shaking the camera, or playing a sound, or iterate the children nodes and execute them. An Event is a script that under certain circumstances executes it's children nodes, which are action scripts. The common events are input-related events, like "pointer down", or "key pressed". If you need to execute an action just right away, then you can use the "on awake event" to trigger the action.

## Core Group

### User components

This package provides a couple of general-purpose user components.

* **Assignment Operator** - to specify an operator (`=`, `+=`, or `=`) in the context of an assignment action.

### Base scripts

Contains basic/abstract functionality. Often, you will create prefab variants of them (extend them).

* **Sprite Base Script** - base prefab for script nodes accessing sprite objects.
* **Root Base Script** - a script node that registers itself into the game object and can be used as a container of other scripts.

### Event scripts

These scripts listen to certain events. When the event is emitted, then executes the children, which are actions.

* **On General Event** - registers to the given `eventEmitter` and listens to the given `eventName` event.
* **On Awake Event** - listens to the `scene-awake` event of the scene.
* **On Pointer Down Event** - listens to the `pointerdown` event of the game object.

### Action scripts

Actions are scripts that are executed manually or by other nodes, like triggers or other actions.

* **Callback Action** - executes the given `callback` expression.
* **Start Scene Action** - starts the given `sceneKey` scene.
* **Exec Action** - executes the given `targetAction`.
* **Emit Event Action** - the given `eventEmitter` emits the given `eventName`.
* **Alert Action** - shows the browser's alert dialog, with the given `message`.
* **Console Log Action** - logs the given `message` to the browser's console.
* **Destroy Action** - destroys the game object.
* **Add To Parent Action** - adds the game object to the given parent.
* **Exec Random Action** - executes a random child node.
* **Exec Children Action** - executes all children nodes.
* **Play Sprite Animation** - plays the given sprite animation.
* **Set Angle Action** - sets the angle to the game object.
* **Set Scale X/Y Action** - set the X or Y of the game object's scale.
* **Set X/Y Action** - set the scale X/Y of the game object's position.
* **Set Flip Action** - flips the game object vertically or horizontally.
* **Spawn Object Action** - spawns an object in the world.

### Assignment Operator component

There are script actions about to set a value to the game object. Like the case of the **Set X Action**.
With the **Assignment Operator**, you can specify the operator to use in the assignment: `=`, `+=`, or `*=`.

### Sprite Base Script

A base script for all the scripts accessing sprite objects. It just overrides the `gameObject` property and sets its type to `Phaser.GameObjects.Sprite`. This helps IDE auto-completion and type-checking.

### Root Base Script

A base script that you can use to register the script node into the game object. In this way you can access the scripts associated to a game object.

When you create a **RootScript**, it registers itself to the game object in this way:

```
gameObject["RootScript__scripts"] = this;
```

You can use the `key` parameter to register the root script node using another attribute. If the `key` parameter is `"anotherScripts"`, then it registers the root node like this:

```
gameObject["RootScript__anotherScripts"] = this;
```

The **RootScript** class contains utility methods for accessing the root script of a game object.

The static `getRoot()` method can be used for getting the root script:

```
const script = RootScript.getRoot(someGameObject);
const otherScript = RootScript.getRoot(someGameObject, "anotherScripts");
```

The static `hasRoot()` method tells if the game object is a root script:

```
if (RootScript.hasRoot(gameObject, "myScripts")) {
    ....
}
```

The static `getChildren()` method returns the children of the root script:

```
const children = RootScript.getChildren(gameObject, "myScripts");
```

You can create variants of the **RootScript** and use different keys.

### On General Event

An event script node. It registers to the given `eventEmitter` and listens to the given `eventName``. When the event is fired, it executes the children's action nodes.

You can create handy prefab variants for different events, like the **On Pointer Down Event** prefab.

You can select an `eventEmitter` from the following list:

* `game.events`
* `scene.events`
* `scene.loader`
* `scene.input`
* `scene.input.keyboard`
* `scene.anims`
* `gameObject` (by default)

### OnPointerDownScript

An event script. It is a prefab variant of the **On General Event** node. It listens to the `pointerdown` event of the game object and executes the children's action nodes.

If the game object's input is not set when the scene "awakes", then this script calls the `gameObject.setInteractive()` method.

### Callback Action

An action script. It executes the given `callback` expression. You can use this script for executing custom methods from your prefabs or scenes.

### Start Scene Action

An action script. It starts the given `sceneKey` scene.

### Exec Action

An action script. It executes the given `targetAction`. You can use this script for executing an action node from the script tree.

For example, let's say you have a **JumpAction** for jumping a character. But you want to call this action when different events are fired:

- When you click a jump button.
- When you press the `SPACE` key.
- When you press the `UP` button of an external gamepad.

So, you can use different **ExecActionScript** nodes in different contexts, but referencing the same **JumpAction** node.

### Emit Event Action

An action script. It calls the emit method of the given `eventEmitter` with the given `eventName`. As an argument of the event, it uses the argument received in the `execute()` method.

Like in the **OnEventScript**, you can select an `eventEmitter` from a list:

* `game.events`
* `scene.events`
* `scene.loader`
* `scene.input`
* `scene.input.keyboard`
* `scene.anims`
* `gameObject` (by default)

### Alert Action

An action script that shows the given `message` in the browser's Alert dialog.

### Console Log Action

An action script that logs the given `message` in the browser's console.

### Destroy Action

An action script that destroys the game object.

### Add To Parent Action

This action adds the game object to the given **Parent Container**.

This action allows the **Action Target Config** component.

### Exec Random Action

This action picks a random child and executes it.

### Exec Children Action

This action executes all children nodes.

### Play Sprite Animation

The action plays the given **Animation Key** in the game object. You can set the **Ignore If Playing** parameter.

This action allows the **Action Target Config** component.

### Set Angle Action

An action to set the given **Angle** to the game object.

This action allows the **Action Target Config** component.

### Set Scale X/Y Action

An action to set the given **X** or **Y** to the game object.

This action allows the **Action Target Config** component.

### Set Flip Action

An action to set flip the game object. It looks into the **Flip Vertical** and **Flip Horizontal** properties.

This action allows the **Action Target Config** component.

### Spawn Object Action

This action creates an instance of the given **Object Prefab** and adds it to the world. If the **Spawn In Parent Position** parameter is checked, then it sets the position of the new object to the same position as the script's game object.

Finally, it executes the children nodes and passes the new object as the first argument.

This action allows the **Action Target Config** component.

## Arcade Group

This library provides a couple of actions and events about the Arcade Physics system in Phaser. As a reminder, an action is executed by an event script or another action.

The events:

* **On World Bounds Collide Event** - Is fired when an object collides with the world bounds.

The actions:

* **Set Velocity Action** - Sets the velocity of the script's game object.
* **Set X Velocity Action** - Sets the velocity's X value to the script's game object.
* **Set Y Velocity Action** - Sets the velocity's Y value to the script's game object.
* **Get GameObject From Body Action** - Gets the game object for the given physics body.
* **Make Object Collider Action** - Creates a physics collider with the game object.
* **Set Body Enable Action** - To enable/disable physics in the game object.
* **Start Flip With Velocity Action** - Starts flipping the game object heading to the velocity vector.
* **Start Follow Pointer Action** - Starts moving the game object toward the pointer position.
* **If Body Touching** - A conditional action to test if the body touching state.

The base classes:

* **Base Arcade Object Script** - A base class for Arcade-related scripts (prefab variants).

### On World Collide Event

*Class: `OnWorldBoundsCollideEventScript`*

This script listens to the [worldbounds](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Physics.Arcade.Events.WORLD_BOUNDS) event. When the event is fired, it executes the children's scripts.

The event is fired only for objects with the body's [onWorldBounds](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Physics.Arcade.Body-onWorldBounds) parameter set to `true`.

You can configure the sides of the world this event listens to, with the **UP**, **DOWN**, **LEFT**, **RIGHT** parameters.

### Set Velocity Action

*Class: `SetVelocityActionScript`*

This action sets the given **X** and **Y** velocity to the game object.

### Set X Velocity Action

*Class: `SetVelocityXActionScript`*

This action sets the given **X** velocity to the game object.

### Set Y Velocity Action

*Class: `SetVelocityXActionScript`*

This action sets the given **X** velocity to the game object.

### Get Game Object From Body Action

This action gets the game object from the given body. The body is passed to this action in the first argument, and this action passes, in the first argument, the associated game object to the children. You can combine this action with the **On World Bounds Collide Event** event.

### If Body Touching

This action tests the game object `body.touching` state. If it is touching, it executes the actions of the **Then actions** node, else, it executes the actions of the **Else actions** node.

This action provides the **Left**, **Right**, **Top**, and **Bottom** boolean parameters. If any of these parameters is `true` and the body touching state of the same side is `true`, then we say the object is touching and then execute the **Then actions**.

This action allows the **Action Target** component.

### Make Object Collider Action

This action creates a collider with the game object and the given **Collide With** object. If you check the **Overlap Only** parameter, then it uses an overlap instead of a collide method.

When there is a collision, this action executes the children nodes and passes as argument the collision event arguments.

This action allows the **Action Target** component.

### Set Body Enable Action

This action updates the body's enable state with the **Enable** parameter's value.

This action allows the **Action Target** component.

### Start Flip with Velocity Action

This action starts monitoring the game object velocity vector and change the flip state of the game object.

If the **Flip Horizontal** is on, then it changes the `flipX` property of the object. If the **Flip Vertical** is on, then it changes the `flipY` property of the object.

By default, it assumes the object is facing left and top in its initial position. You can change it with the **Facing Left** and **Facing Right** parameters.

This action allows the **Action Target** component.

### Start Follow Pointer Action

This action starts monitoring the pointer and moves the game object towards the pointer's position.

This action allows the **Action Target** component.

## Animations Group

This library provides a couple of actions for animating an object. It also contains user components for adding extra configuration to some of the actions. As a reminder, an action is executed by an event script or another action.

The actions:

* **Fade Object Action** - Animates the `alpha` value of an object for fading it in or out.
* **Move To Scene Action** - Animates the object from the outside of the screen to its initial position.
* **Move Out Scene Action** - Animates the object outside the scene from its initial position.
* **Push Action** - Animates the scale of the object, with a "push" effect.

The user components:

* **Delay Config** - Configures the delay of an animation script.
* **Duration Config** - Configures the duration of an animation script.
* **Ease Config** - Configures the ease of an animation script.

### Fade Object Action

*Class: `FadeActionScript`*

This action animates the `alpha` parameter of the game object to fade it in or out.

The **Fade Direction** of the script indicates if it will fade "in" or "out".

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

This action allows the **Action Target Config** user component.

### Move To Scene Action (`MoveInSceneActionScript.scene`)

*Class: `MoveInSceneActionScript`*

This script moves the game object from outside the scene to the current position. You can set the direction from where the object enters the scene, in the **From** property. The possible values are **LEFT**, **RIGHT**, **TOP**, **BOTTOM**, and **NONE**.

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

This action allows the **Action Target Config** user component.

### Move Out Scene Action

*Class: `MoveOutSceneActionScript`*

This script moves the game object to the outside of the scene. You can set the direction to where the object exits the scene, in the **To** property. The possible values are **LEFT**, **RIGHT**, **TOP**, **BOTTOM**, and **NONE**.

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

This action allows the **Action Target Config** user component.

### Push Action

*Class: `PushActionScript`*

This script performs a push-button-like effect on the game object, scaling it down and out, and restoring the initial scale.

You can configure the duration of the animation by adding the **Duration Config** user component.

This action allows the **Action Target Config** user component.

### Delay Config

*Class: `DelayConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Delay** property. You can add it to the animation scripts to change the default **delay** of the animations.

### Duration Config

*Class: `DurationConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Duration** property. You can add it to the animation scripts to change the default **duration** of the animations.

### Ease Config

*Class: `DurationConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Ease** property. It is an Option property to select an ease function from the Phaser Ease default constants: `Power0`,..., `Power4`, `Linear`, `Quad`, `Cubic`,..., `Expo.easeIn`, `Expo.easeOut`, etc...

You can add this component to the animation scripts to change the default **ease** of the animations.

## Audio Group

This library provides a couple of actions for playback audio files. As a reminder, an action is executed by an event script or another action.

It also contains user components for configuring the actions.

The actions:

* **Play Audio Action** - Plays the given audio key.
* **Stop Audio Action** - Stops the given audio key.
* **Stop All Audios Action** - Stops all playing audios.
* **Pause All Audios Action** - Pauses all playing audios.
* **Resume All Audios Action** - Resumes all paused audios.

The user components:

* **Audio Loop Config** - To configure the **loop** property in playing action scripts.
* **Audio Volume Config** - To configure the **volume** property in playing action scripts.

### Play Audio Action

*Class: `PlayAudioActionScript`*

This action plays the audio you set in the **Audio Key** property. You can add the **Audio Loop Config** and **Audio Volume Config** components to this script for configuring the sound.

### Stop Audio Action

*Class: `StopAudioActionScript`*

This action stops the audio with the given **Audio Key**.

### Stop All Audios Action

*Class: `StopAllSoundsActionScript`*

This action stops all playing audios.

### Pause All Audios Action

*Class: `PauseAllSoundsActionScript`*

This action pauses all playing sounds.

### Resume All Audios Action

*Class: `ResumeAllSoundsActionScript`*

This action resumes all paused audios.

## Camera Group

This library provides a couple of actions for handle the camera. As a reminder, an action is executed by an event script or another action.

The actions:

* **Zoom Camera Action** - Executes the zoom camera effect.
* **Shake Camera Action** - Executes the shake camera effect.
* **Flash Camera Action** - Executes the flash camera effect.
* **Fade Camera Action** - Executes the fade camera effect.
* **Camera Start Follow Action** - The camera starts following the game object.
* **Camera Stop Follow Action** - Stops the camera follow.

### Zoom Camera Action

*Class: `ZoomCameraAction`*

This action runs the [Zoom effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-zoomTo) of the camera.

You can change how much the camera zooms with the **Zoom** property.

You can configure the duration and ease of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) and [Ease Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#ease-config) components of the `@phaserjs/editor-scripts-simple-animations` library.

### Shake Camera Action

*Class: `ShakeCameraAction`*

This action runs the [Shake effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-shake) of the camera.

You can tweak the effect by setting the **Intensity**, **Force**.

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

### Flash Camera Action

*Class: `FlashCameraActionScript`*

This action runs the [Flash effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-flash) of the camera.

You can tweak the effect by setting the **Color** property.

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

### Fade Camera Action

*Class: `FadeCameraActionScript`*

This action runs the [Fade effect](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-fade) of the camera.

You can tweak the effect by setting the **Color** and **Fade Direction** properties.

You can configure the duration of the effect by adding the [Duration Config](https://github.com/PhaserEditor2D/phasereditor2d-scripts-simple-animations#duration-config) component of the `@phaserjs/editor-scripts-simple-animations` library.

### Camera Start Follow Action

*Class: `CameraStartFollowActionScript`*

With this action the camera [starts following](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Cameras.Scene2D.Camera-startFollow) the script's game object.

You can configure the moving effect with the **Round Pixels**, **Lerp X**, **Lerp Y**, **Offset X**, **Offset Y** parameters.

### Camera Stop Follow Action

*Class: `CameraStopFollowActionScript`*

This action stops the camera following of the script's game object.

## Random Group

This library provides a few actions for using random values in your game. You can configure the domain of the random values by using the configuration components.

As a reminder, an action is executed by an event script or another action.

The actions:

* **Set Random X Action** - Set a random value to the object's X.
* **Set Random Y Action** - Set a random value to the object's X.

The configuration components:

* **Random Between Config** - To select an integer random value between two numbers.
* **Random Multiple Config** - To select an integer random multiple between two numbers.
* **Random In Array Config** - To pick a random value in an array of options.

### Set Random X Action

*Class: SetRandomXActionScript*

This action sets a random X value to the game object. It requires that you add to this node one of the random configuration components.

It allows

### Set Random Y Action

*Class: SetRandomYActionScript*

This action sets a random Y value to the game object. It requires that you add to this node one of the random configuration components.

### Random Between Config

This user component contains the configuration for generating random integer values between the given parameters **Min** and **Max**.

### Random Multiple Config

This user component contains the configuration for generating random integer values between the given parameters **Min** and **Max**, but it is also a multiple of the **Multiple** parameters.

Eg., with a multiple of 10, the possible values between 10 and 30 are 10, 20, and 30.

### Random In Array Config

This user component contains the parameters for picking a random number from an array of options. You can write the array in the **Options** parameters, following a JSON array format. Like this: `[10, 34, 2, 89, 20]`.

## Timer Group

This library provides a few actions for implementing timers in your game.

As a reminder, an action is executed by an event script or another action.

The actions:

* **Delay Action** - Delays, then executes the children's scripts.
* **Delay Random Action** - Delays a random time, then executes the children's
* **Emit Tick Action** - Emits a tick at every given delay.
* **Emit Random Tick Action** - Emits a tick always at a random delay.

### Delay Action

*Class: DelayActionScript*

This action delays a given **Delay** time and then executes the children's scripts.

This action allows the **Target Action Config** user component.

### Delay Random Action

*Class: DelayRandomActionScript*

This action delays a random time and then executes the children's scripts.

The delay is a random value generated by any of the random user component configurations in the [@phaserjs/editor-scripts-random](https://github.com/PhaserEditor2D/phasereditor2d-scripts-random) library.


This action allows the **Target Action Config** user component.

### Emit Tick Action Script

*Class: EmitTickActionScript*

This action emits a tick at a fixed rate, within the given **Delay**. At every tick, it executes the children's scripts.

This action allows the **Target Action Config** user component.

### Emit Random Tick Action

*Class: EmitRandomTickActionScript*

This action emits a tick at a random rate. At every tick, it executes the children's scripts.

The delay is a random value generated by any of the random user component configurations in the [@phaserjs/editor-scripts-random](https://github.com/PhaserEditor2D/phasereditor2d-scripts-random) library.

This action allows the **Target Action Config** user component.
