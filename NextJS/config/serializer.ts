import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

export const deserializer = new CamelcaseSerializer();
export const serializer = new SnakecaseSerializer();
