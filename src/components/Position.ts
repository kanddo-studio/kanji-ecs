import { Component } from "core";

export class PositionComponent implements Component {
  constructor(
    public x: number,
    public y: number,
  ) {}
}
