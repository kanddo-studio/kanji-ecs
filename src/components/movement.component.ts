import { IComponent } from "./component";

interface IMovementComponentProps {
  speed: number
}

export class MovementComponent implements IComponent {
  name = 'movement';
  speed: number;

  constructor(props: IMovementComponentProps) {
    this.speed = props.speed;
  }
}