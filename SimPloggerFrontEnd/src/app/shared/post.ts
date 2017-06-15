import { Category } from '../shared/category';

export class Post {
    id: number;
    title: string;
    header: string;
    body: string;
    postDate: Date;
    author: string;
    categoryId: number;
    category: Category;
}