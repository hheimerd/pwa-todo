import styled from 'styled-components';
import checkSign from '../assets/check.svg';

export type CheckboxProps = {
    checked: boolean,
    onChange?: (newState: boolean) => void,
}

export const Checkbox = ({checked, onChange}: CheckboxProps) =>
    (
        <CheckboxOutline onClick={() => onChange?.(!checked)} checked={checked}>
            <CheckSign src={checkSign} checked={checked}/>
        </CheckboxOutline>
    );

const CheckboxOutline = styled.div<{checked: boolean}>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;

  border: 2px solid ${({checked}) => checked ? '#62a7e0' : '#6276E0'};;
  border-radius: 100%;
  transition: 0.2s;
  user-select: none;
`;

const CheckSign = styled.img<{checked: boolean}>`
  position: absolute;

  top: 9px;
  left: 7px;

  opacity: ${({checked}) => checked ? 1 : 0};
  transition: 0.2s;
`;
