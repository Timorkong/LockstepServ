import { Singleton } from "../Singleton/Singleton";
import { RoomManager } from "./Room/RoomManager";

export class IntervalManager extends Singleton<IntervalManager> {
  public timer: NodeJS.Timer | null = null;

  public Register() {
    this.timer = setInterval(() => {
      RoomManager.Instance(RoomManager).Update();
    }, 100)
  }
}