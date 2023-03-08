import './styles/App.css';
import styled from 'styled-components';
import {TaskList} from './components/TaskList';
import {TaskLocalRepository} from './repositories/task.local.repository';
import {useEffect} from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {Task} from './entities/task.entity';
import {CreateTaskDto} from './repositories/task.repository';
import {UpdateTaskDto} from './repositories/task.repository';
import {CreateTaskModule} from './components/CreateTaskModule';

const repo = new TaskLocalRepository();

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        repo.getTasks().then(setTasks);
    }, []);

    const refreshTask = useCallback(
        () => {
            repo.getTasks().then(setTasks);
        },
        [setTasks],
    );

    const addTask = useCallback((dto: CreateTaskDto) => {
        repo.createTask(dto).then(refreshTask);
    }, []);

    const updateTask = useCallback((dto: UpdateTaskDto) => {
        repo.updateTask(dto).then(refreshTask);
    }, []);

    return (
        <Background>
            <Header>Tasks</Header>
            <ContentWrapper>
                <TaskList tasks={tasks} onTaskUpdated={updateTask}/>
                <CreateTaskModule/>
            </ContentWrapper>
        </Background>
    );
}

const Header = styled.div`
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Audiowide', sans-serif;
  color: rgba(255, 255, 255, 0.45);;
`;

const Background = styled.div`
  background: radial-gradient(192.31% 89.75% at 50% 100%, #323F61 0%, rgba(50, 63, 97, 0) 100%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 550px;
  height: 100%;
`

export default App;
