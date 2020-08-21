import { Property } from './property.model';
import { Type } from './type.model';

export interface Bloc {
    // Attributes
    id: number;
    name: string;
    type: Type;
    style: Property[];
    hoverStyle: Property[];
    content: string;
    open: boolean;
    children: Bloc[];

    // Operations

}
