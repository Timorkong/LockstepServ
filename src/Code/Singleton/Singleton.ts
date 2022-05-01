export class Singleton<T>
{
    private static instance: any;
    public static Instance<T>(c: { new(): T }): T {
        if (this.instance == null) this.instance = new c();
        return <T>this.instance;
    }
}