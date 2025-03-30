import { Entity, Component } from "../../core";

class MockComponent implements Component {}

describe("Entity", () => {
  let entity: Entity;
  let mockComponent: MockComponent;

  beforeEach(() => {
    entity = new Entity();
    mockComponent = new MockComponent();
  });

  it("should create an instance of Entity without errors", () => {
    expect(entity).toBeInstanceOf(Entity);
  });

  it("should add and retrieve a component", () => {
    entity.add("mock", mockComponent);
    const retrievedComponent = entity.get<MockComponent>("mock");

    expect(retrievedComponent).toBe(mockComponent);
  });

  it("should check if a component exists", () => {
    entity.add("mock", mockComponent);
    expect(entity.has("mock")).toBe(true);
    expect(entity.has("nonExisting")).toBe(false);
  });

  it("should return undefined for non-existing component", () => {
    const nonExistingComponent = entity.get<MockComponent>("nonExisting");
    expect(nonExistingComponent).toBeUndefined();
  });
});
