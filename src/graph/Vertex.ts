import Edge from './Edge';
import getCanvas from '../graph-ui/canvas/canvas';

class Vertex {
    label: string;
    neighbors: Edge[] = [];
    visited: boolean = false;
    x: number = 0;
    y: number = 0;
    canvas: HTMLCanvasElement;
    constructor(label: string) {
        this.label = label;
        this.canvas = getCanvas();
    }
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getNeighbors() { 
        return this.neighbors;
    }
    setVisited(visited: boolean) {
        this.visited = visited;
    }
    addNeighbor(destination: Vertex, weight: number | null) {
        const edge: Edge = new Edge(null, this);
        edge.setDestination(destination);
        edge.setLabel(`${this.label}_${destination.label}`);
        if (weight) {
            edge.setWeight(weight);
        }
        this.neighbors.push(edge);
        return edge;
    }
    paint(x: number, y: number, ctx) {
        if (this.canvas === null) {
            throw new Error('Failed to get canvas');
        }
        if (ctx === null) {
            throw new Error('Failed to get 2D context');
        }
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 0.3;
        ctx.fillStyle = 'black';
        ctx.moveTo(x, y);
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.stroke();
    }
    drawEdge(from: Vertex, to: Vertex, ctx: CanvasRenderingContext2D, color: string = 'red') {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;      
        ctx.moveTo(from.getX(), from.getY());
        ctx.lineTo(to.getX(), to.getY());
        ctx.stroke();
    }
}
export default Vertex;