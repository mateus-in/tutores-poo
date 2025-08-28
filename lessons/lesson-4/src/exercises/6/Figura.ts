import { IFiguraGeometrica } from './IFiguraGeometrica';

export abstract class Figura implements IFiguraGeometrica {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}
