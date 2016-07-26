import {
    Product,
} from '../../products/index';

export class Item {
    id: number;
    name: string;
    done: boolean;
    product: Product;
}
