import styled from 'styled-components';
import {defaultShadow} from '../styles/shadows';
import {taskGradient} from '../styles/colors';
import {defaultBorderRadius} from '../styles/global';
import {ColorCircle} from './ColorCircle';
import {useState} from 'react';
import ContentEditable from 'react-contenteditable'
import {useRef} from 'react';

export function CreateTaskModule() {
    const [taskText, setTaskText] = useState('');
    const ce = useRef(null);

    return (
        <Wrapper>
            <ColorCircle color={'#31e0e0'}/>
            <InputStyles
                innerRef={ce}
                html={taskText} // innerHTML of the editable div
                onChange={e => setTaskText(e.target.value)} // handle innerHTML change
                tagName="span" // Use a custom HTML tag (uses a div by default)
            />
            <AddButton/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  ${defaultShadow};
  ${taskGradient};
  
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  
  border-radius: ${defaultBorderRadius} ${defaultBorderRadius} 0 0;
  
`

const InputStyles = styled(ContentEditable)<{html?: string}>`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  border: none;
  background: transparent;
  cursor: auto;

  min-width: 100px;
  width: 100%;
  max-height: 3rem;
  min-height: 20px;
  margin: auto;
  display: inline;
  vertical-align: middle;

  overflow-y: auto;
  
  :after {
    content: '${(p) => p.html ? '' : 'Type text here'}';
    opacity: 0.8;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6276E0; // TODO: add this color to colors
    border-radius: 0.5rem;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

const AddButton = styled.button`
  background: radial-gradient(145.65% 132.41% at 50% 96.3%, #7268E0 0%, #47AEF9 100%);
  box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;

  height: 3rem;
  width: 3rem;
  
  transition: 0.2s;
  
  :before, :after {
    content: '';
    position: absolute;
    width: 17px;
    height: 3px;
    background: white;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  :after {
    transform: rotate(90deg);
  }
  
  :active {
    box-shadow: 0 0 rgba(0, 0, 0, 0.25);
    transform: translate(-0.5px, 0.5px);
  }
  
  border: none;
  outline: none;
`
