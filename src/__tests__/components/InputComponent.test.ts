import { InputComponent } from "../../components";

describe("InputComponent", () => {
  it("should create an instance of InputComponent without errors", () => {
    const inputComponent = new InputComponent();
    expect(inputComponent).toBeInstanceOf(InputComponent);
    expect(inputComponent.keys).toBeInstanceOf(Set);
    expect(inputComponent.keys.size).toBe(0);
  });

  it("should initialize the keys set correctly", () => {
    const keys = new Set<string>(["a", "b", "c"]);
    const inputComponent = new InputComponent(keys);

    expect(inputComponent.keys).toBe(keys);
    expect(inputComponent.keys.size).toBe(3);
    expect(inputComponent.keys.has("a")).toBe(true);
    expect(inputComponent.keys.has("b")).toBe(true);
    expect(inputComponent.keys.has("c")).toBe(true);
  });

  it("should add and remove keys from the set", () => {
    const inputComponent = new InputComponent();

    inputComponent.keys.add("Enter");
    expect(inputComponent.keys.has("Enter")).toBe(true);

    inputComponent.keys.delete("Enter");
    expect(inputComponent.keys.has("Enter")).toBe(false);
  });
});
