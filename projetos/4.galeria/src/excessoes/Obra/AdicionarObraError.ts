export class AdicionarObraError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Não é possível adicionar a obra: obra indisponível para venda ou exibição.';
    }
}