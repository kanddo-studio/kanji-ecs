import { MovementSystem } from "../../systems";
import { Entity } from "../../core";
import {
  PositionComponent,
  VelocityComponent,
  InputComponent,
} from "../../components";

describe("MovementSystem", () => {
  let entity: Entity;

  let position: PositionComponent;
  let velocity: VelocityComponent;
  let input: InputComponent;

  let movementSystem: MovementSystem;

  beforeEach(() => {
    entity = new Entity();

    position = new PositionComponent(0, 0);
    velocity = new VelocityComponent(10);
    input = new InputComponent();

    movementSystem = new MovementSystem();

    entity.add("position", position);
    entity.add("velocity", velocity);
    entity.add("input", input);
  });

  it("should update position correctly based on input", () => {

    input.keys.add("ArrowUp");
    input.keys.add("ArrowRight");

    const delta = 1; 

    movementSystem.update([entity], delta);

    expect(position.x).toBeCloseTo(velocity.speed / Math.sqrt(2), 5); 
    expect(position.y).toBeCloseTo(-velocity.speed / Math.sqrt(2), 5); 
  });

  it("should handle missing components", () => {

    entity = new Entity(); 

    expect(() => {
      const delta = 1; 
      movementSystem.update([entity], delta); 
    }).toThrow("Error: Missing Component Dependency");
  });

  it("should not update position if no input is provided", () => {

    const initialPosition = { ...position };

    const delta = 1; 
    movementSystem.update([entity], delta);

    expect(position.x).toBe(initialPosition.x);
    expect(position.y).toBe(initialPosition.y);
  });

  it("should move diagonally when both horizontal and vertical keys are pressed", () => {
    input.keys.add("ArrowDown");
    input.keys.add("ArrowLeft");

    const delta = 1; 

    movementSystem.update([entity], delta);

    expect(position.x).toBeCloseTo(
      -velocity.speed * Math.cos(Math.atan(1)) * delta,
      5,
    );

    expect(position.y).toBeCloseTo(
      velocity.speed * Math.sin(Math.atan(1)) * delta,
      5,
    );
  });
});