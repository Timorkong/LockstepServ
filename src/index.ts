import { NetManager } from "./NetWork/NetManager";
import { IntervalManager } from "./Code/Game/IntervalManager";
process.env.NODE_DEBUG = "true";
IntervalManager.Instance(IntervalManager).Register();
NetManager.Instance(NetManager).start();