import { Component } from "./Component";

export class Entity {
    private components: Map<string, Component> = new Map();

    add(name: string, component: Component) {
        this.components.set(name, component);
    }

    get(name: string): Component | undefined {
        return this.components.get(name);
    }

    has(name: string): boolean {
        return this.components.has(name);
    }
}
