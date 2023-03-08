import styled from 'styled-components';
import {taskGradient} from '../styles/colors';
import {Task} from '../entities/task.entity';
import {Checkbox} from './Checkbox';
import {UpdateTaskDto} from '../repositories/task.repository';
import {defaultShadow} from '../styles/shadows';
import {defaultBorderRadius} from '../styles/global';
import {media} from '../styles/triggers';
import {ColorCircle} from './ColorCircle';

export type TaskProps = {
    tasks: Task[];
    onTaskUpdated?: (update: UpdateTaskDto) => void;
}

export function TaskList({tasks, onTaskUpdated}: TaskProps) {

    return (
        <Wrapper>
            {tasks.map(task => (
                <TaskWrapper key={task.id}>
                    <ColorTextWrapper>
                        <ColorCircle color={task.color}/>
                        <TaskText>{task.text}</TaskText>
                        <Checkbox
                            checked={task.done}
                            onChange={newState => {
                                onTaskUpdated?.({id: task.id, done: newState});
                            }}
                        />
                    </ColorTextWrapper>
                </TaskWrapper>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  height: 100%;
  overflow: auto;

  padding-bottom: 1rem;

  @media screen and (max-width: ${media.phone}) {
    padding-left: 4px;
    padding-right: 4px;
  }

`;

const TaskWrapper = styled.div`
  ${taskGradient};
  display: flex;
  border-radius: ${defaultBorderRadius};
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  ${defaultShadow};
`;

const ColorTextWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TaskText = styled.span`
  display: flex;
  align-items: center;
`;
