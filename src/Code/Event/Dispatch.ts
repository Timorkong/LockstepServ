import { Cmd } from "./../../../src/protobuff/command_id";

export class Dispatch {
    private eventMap: Map<number, Function[]> = new Map<number, Function[]>();

    public On(eventId: number, fun: Function) {
        let funcs = this.eventMap.get(eventId);
        if (funcs == null) {
            funcs = new Array<Function>();
            this.eventMap.set(eventId, funcs);
        }
        funcs.push(fun);
    }

    public Off(eventId: number, fun: Function) {
        let funcs = this.eventMap.get(eventId);
        if (funcs == null) return;
        let index = funcs.indexOf(fun);
        if (index != -1) {
            funcs.splice(index, 1);
        }
    }

    public ClearAll() {
        this.eventMap.clear();
    }

    public DisPatch(eventId: number, ...args: any[]) {
        let funcs = this.eventMap.get(eventId);
        if (funcs == null) return;
        funcs.forEach(func => {
            func(args);
        });
    }
}