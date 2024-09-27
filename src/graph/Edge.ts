import Vertex from './Vertex';

class Edge {
    label: string | null;
    source: Vertex | null;
    destination: Vertex | null;
    weight: number
    constructor(label: string | null = '', source: Vertex | null = null) {
        this.label = label;
        this.source = source;
        this.destination = null;
        this.weight = Infinity;
    }
    setLabel(label: string) {
        this.label = label;
    }
    setSource(source: Vertex) {
        this.source = source;
    }
    setWeight(weight: number) {
        this.weight = weight;
    }
    setDestination(destination: Vertex) {
        this.destination = destination;
    }
    getWeight(): number {
        return this.weight;
    }

    // Agregar el método getSource si es necesario
    getSource(): Vertex | null {
        return this.source;
    }

    // Agregar el método getDestination si es necesario
    getDestination(): Vertex | null {
        return this.destination;
    }
}
export default Edge;