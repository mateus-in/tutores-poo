export class VenderObraError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "VenderObraError";
    }
}