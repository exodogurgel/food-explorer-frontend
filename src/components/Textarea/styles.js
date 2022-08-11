import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TextareaInput= styled.textarea`
  width: 100%;
`