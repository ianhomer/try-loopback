import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Thing, ThingRelations} from '../models';

export class ThingRepository extends DefaultCrudRepository<
    Thing,
    typeof Thing.prototype.id,
    ThingRelations
    > {
    constructor(@inject('datasources.db') dataSource: juggler.DataSource) {
        super(Thing, dataSource);
    }
}