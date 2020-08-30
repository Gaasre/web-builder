import { Property } from './property.model';
import { Type } from './type.model';

export interface Block {
    // Attributes
    id: number;
    name: string;
    type: Type;
    style: Property[];
    hoverStyle: Property[];
    content: string;
    open: boolean;
    selected: boolean;
    editing: boolean;
    isRoot?: boolean;
    children: Block[];

    // Operations

}
