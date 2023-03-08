import {Task} from '../entities/task.entity';

export type CreateTaskDto = Omit<Task, 'id' | 'done'>;
export type UpdateTaskDto = Partial<Task> & Pick<Task, 'id'>;


export abstract class TaskRepository {
    abstract getTasks(): Promise<Task[]>;

    abstract createTask(dto: CreateTaskDto): Promise<Task>;

    abstract removeTask(id: Task['id']): Promise<Task | null>;

    abstract updateTask(update: UpdateTaskDto): Promise<Task>;
}
