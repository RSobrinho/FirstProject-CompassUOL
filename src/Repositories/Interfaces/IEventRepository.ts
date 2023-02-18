import { Event } from '../../Entities/Event'

export interface IEventRepository {
  save(event: Event): Promise<void>,
  findAll(): Promise<Event[]>,
  findById(id: string): Promise<Event>,
  deleteById(id: string): Promise<boolean>,
  updateById(id: string): Promise<Event>,
  deleteAll(event?: Event[]): Promise<void>,
  // findByWeekDay(dayChosen: number): Promise<Event[]>
}
