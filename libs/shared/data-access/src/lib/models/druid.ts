import { Spell } from './spell'
import { EntityState } from '@ngrx/entity'

export interface Druid {
  id: string;
  name: string;
  spells: EntityState<Spell>;
}
