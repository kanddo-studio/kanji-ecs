import { PositionComponent } from "../../components";

describe("PositionComponent", () => {
  it("should create an instance of PositionComponent without errors", () => {
    const positionComponent = new PositionComponent(0, 0);
    expect(positionComponent).toBeInstanceOf(PositionComponent);
    expect(positionComponent.x).toBe(0);
    expect(positionComponent.y).toBe(0);
  });

  it("should initialize the x and y properties correctly", () => {
    const positionComponent = new PositionComponent(10, 20);

    expect(positionComponent.x).toBe(10);
    expect(positionComponent.y).toBe(20);
  });

  it("should update the x and y properties correctly", () => {
    const positionComponent = new PositionComponent(0, 0);

    positionComponent.x = 100;
    positionComponent.y = 200;

    expect(positionComponent.x).toBe(100);
    expect(positionComponent.y).toBe(200);
  });
});
