import { Document } from 'mongoose';

export default interface Post extends Document {
    // want to be able to all props associates with Document, like ids, methods etc.
    title: string;
    body: string;
}