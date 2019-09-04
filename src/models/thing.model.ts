import {Entity, model, property} from '@loopback/repository';

@model()
export class Thing extends Entity {
    @property()
    id?: number;
    @property({
        required: true,
    })
    title: string;
}

export interface ThingRelations {
    // describe navigational properties here
}

export type ThingWithRelations = Thing & ThingRelations;