export class RemoverObraError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Não é possível remover a obra: obra não encontrada na exposição.';
    }
}