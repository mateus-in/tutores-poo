export class ObraIndisponivelError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Não é possível realizar a operação: obra indisponível para venda ou exibição.';
    }
}

