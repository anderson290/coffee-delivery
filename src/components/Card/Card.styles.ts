import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  flex-direction: column;
    align-items: center;
`

export const CardImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  top: -1.5rem;
`

export const CardBody = styled.div`
  text-align: center;
  padding: 1rem;
`

export const CardTitle = styled.p`
    font-family: 'Baloo 2', cursive;
`


export const CardDescription = styled.p`
`
