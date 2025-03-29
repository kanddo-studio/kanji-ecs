import Phaser from 'phaser';

import { IComponent, MovementComponent } from '../components';

interface IPlayerEntityConstructor {
    scene: Phaser.Scene,
    x: number, 
    y: number
}
export class PlayerEntity extends Phaser.GameObjects.Sprite {
    components: IComponent[];

    constructor(props: IPlayerEntityConstructor) {
        super(props.scene, props.x, props.y, 'player');
        props.scene.add.existing(this);

        this.components = [
            new MovementComponent({ speed: 200 }),
        ];
    }

    getComponent(componentClass: any) {
        return this.components.find(component => component instanceof componentClass);
    }
}
