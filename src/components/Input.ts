import { Component } from "core";

export interface InputComponent extends Component {
    keys: Set<string>;
}