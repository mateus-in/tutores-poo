export class OrganizarExposicaoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "OrganizarExposicaoError";
    }
}