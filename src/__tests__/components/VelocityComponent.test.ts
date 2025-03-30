import { VelocityComponent } from "../../components";

describe("VelocityComponent", () => {
  it("should create an instance of VelocityComponent without errors", () => {
    const velocityComponent = new VelocityComponent(10);
    expect(velocityComponent).toBeInstanceOf(VelocityComponent);
    expect(velocityComponent.speed).toBe(10);
  });

  it("should initialize the speed property correctly", () => {
    const velocityComponent = new VelocityComponent(50);
    expect(velocityComponent.speed).toBe(50);
  });

  it("should update the speed property correctly", () => {
    const velocityComponent = new VelocityComponent(10);
    velocityComponent.speed = 100;
    expect(velocityComponent.speed).toBe(100);
  });
});
