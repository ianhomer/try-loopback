import {Thing} from '../models/thing.model';
import {repository} from '@loopback/repository';
import {post, get, getModelSchemaRef, param, requestBody} from '@loopback/rest';
import {ThingRepository} from '../repositories';

export class ThingController {
    constructor(
        @repository(ThingRepository) protected thingRepo: ThingRepository,
    ) {}

    @post('/todos', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {'application/json': {schema: getModelSchemaRef(Thing)}},
            },
        },
    })
    async createTodo(
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

    @get('/todos/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {'application/json': {schema: getModelSchemaRef(Thing)}},
            },
        },
    })
    async findTodoById(
        @param.path.number('id') id: number,
        @param.query.boolean('items') items?: boolean,
    ): Promise<Thing> {
        return this.thingRepo.findById(id);
    }
}