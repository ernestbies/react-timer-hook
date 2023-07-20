export default class Validate {
    static expiryTimestamp(expiryTimestamp) {
        return new Date(expiryTimestamp).getTime() > 0;
    }

    static onExpire(onExpire) {
        return onExpire && typeof onExpire === "function";
    }
}
