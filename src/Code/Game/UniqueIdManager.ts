import { Singleton } from "../Singleton/Singleton";

export class UniqueIdManager {
  private static uniqueId: number = 0;

  public static Null = -1;

  public static get GetId(): number {
    return this.uniqueId++;
  }
}