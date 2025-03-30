import { Entity, System } from "core";

import { PositionComponent, VelocityComponent, InputComponent } from "components";

export class MovementSystem implements System {
    update(entities: Entity[], delta: number) {
        entities.forEach(entity => {
            const position = entity.get('position') as PositionComponent;
            const velocity = entity.get('velocity') as VelocityComponent;
            const input = entity.get('input') as InputComponent;

            if (position && velocity && input) {
                let dx = 0;
                let dy = 0;

                if (input.keys.has("ArrowUp")) dy -= 1;
                if (input.keys.has("ArrowDown")) dy += 1;
                if (input.keys.has("ArrowLeft")) dx -= 1;
                if (input.keys.has("ArrowRight")) dx += 1;

                const magnitude = Math.sqrt(dx * dx + dy * dy);

                if (magnitude > 0) {
                    dx /= magnitude;
                    dy /= magnitude;
                }

                position.x += dx * velocity.speed * delta;
                position.y += dy * velocity.speed * delta;
            }
        })
    }
}
