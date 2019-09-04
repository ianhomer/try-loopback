import {Thing} from '../models/thing.model';
import {Filter, repository} from '@loopback/repository';
import {post, get, getFilterSchemaFor, getModelSchemaRef, param, requestBody} from '@loopback/rest';
import {ThingRepository} from '../repositories';

export class ThingController {
    constructor(
        @repository(ThingRepository) protected thingRepo: ThingRepository,
    ) {}

    @post('/things', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {'application/json': {schema: getModelSchemaRef(Thing)}},
            },
        },
    })
    async createThing(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Thing, {exclude: ['id']}),
                },
            },
        })
            todo: Omit<Thing, 'id'>,
    ): Promise<Thing> {
        return this.thingRepo.create(todo);
    }

    @get('/things/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {'application/json': {schema: getModelSchemaRef(Thing)}},
            },
        },
    })
    async findThingById(
        @param.path.number('id') id: number,
        @param.query.boolean('items') items?: boolean,
    ): Promise<Thing> {
        return this.thingRepo.findById(id);
    }

    @get('/things', {
        responses: {
            '200': {
                description: 'Array of Thing model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: getModelSchemaRef(Thing)},
                    },
                },
            },
        },
    })
    async findThings(
        @param.query.object('filter', getFilterSchemaFor(Thing))
            filter?: Filter<Thing>,
    ): Promise<Thing[]> {
        return this.thingRepo.find(filter);
    }
}