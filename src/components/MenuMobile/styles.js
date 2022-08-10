import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 5;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`

export const Favorites = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};
  border-radius: 0.5rem;
  padding-right: 1.6rem;
  position: relative;

  > svg {
    left: 1.6rem;
    position: absolute;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;

    padding-left: 4.8rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`

export const Button = styled.a`
  width: 21.6rem;
  height: 5.6rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;
`

export const Logout = styled.a`
  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  } 
`