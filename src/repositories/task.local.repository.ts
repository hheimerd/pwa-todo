import {TaskRepository} from './task.repository';
import {Task} from '../entities/task.entity';
import {TackColor} from '../enums/task-color.enum';
import {CreateTaskDto} from './task.repository';
import {UpdateTaskDto} from './task.repository';

export class TaskLocalRepository extends TaskRepository {

    private static tasks: Task[] = [
        {
            color: TackColor.Cyan,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim',
            id: 1,
            done: false
        },
        {
            color: TackColor.Cyan,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim',
            id: 2,
            done: true
        },
        {
            color: TackColor.Cyan,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim',
            id: 3,
            done: false
        },
    ]

    createTask(dto: CreateTaskDto): Promise<Task> {
        const task = new Task(TaskLocalRepository.tasks.length, dto.text, dto.color);
        TaskLocalRepository.tasks.push(task)
        return Promise.resolve(task);
    }

    getTasks(): Promise<Task[]> {
        return Promise.resolve(TaskLocalRepository.tasks.slice());
    }

    removeTask(id: Task["id"]): Promise<Task | null> {
        const taskIndex = TaskLocalRepository.tasks.findIndex(x => x.id == id)

        const deletedTask = TaskLocalRepository.tasks.splice(taskIndex, 1)[0];

        return Promise.resolve(deletedTask);
    }

    updateTask(update: UpdateTaskDto): Promise<Task> {
        const taskIndex = TaskLocalRepository.tasks.findIndex(x => x.id == update.id)
        const oldTask = TaskLocalRepository.tasks[taskIndex];

        TaskLocalRepository.tasks[taskIndex] = {...oldTask, ...update};

        return Promise.resolve(TaskLocalRepository.tasks[taskIndex]);
    }

}
