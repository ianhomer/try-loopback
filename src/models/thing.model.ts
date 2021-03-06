import {Entity, model, property} from '@loopback/repository';

@model()
export class Thing extends Entity {
    @property({
        type: 'number',
        generated: true,
        id: true,
    })
    id?: number;
    @property({
        required: true,
    })
    title: string;
    @property({
        required: false,
    })
    description?: string
}

export interface ThingRelations {
    // describe navigational properties here
}

export type ThingWithRelations = Thing & ThingRelations;