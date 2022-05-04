import { NetManager } from "./NetWork/NetManager";
process.env.NODE_DEBUG = "true";
NetManager.Instance(NetManager).start();