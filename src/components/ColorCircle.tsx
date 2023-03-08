import styled from 'styled-components';

export const ColorCircle = styled.div<{ color: string }>`
  border-radius: 100%;
  background: ${({color}) => color};

  min-height: 44px;
  max-height: 44px;
  min-width: 44px;
  max-width: 44px;
`;
