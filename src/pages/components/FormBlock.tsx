import styled from '@emotion/styled'

type BlockTitle = {
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit' | 'initial' | 'unset'
}
const BlockTitle = styled.label<BlockTitle>`
  display: block;
  padding: unset;
  white-space: normal;
  text-align: ${(props) => props.align ?? 'left'};
  & > span {
    color: lightgray;
    font-size: small;
    margin-left: 0.5rem;
    display: inline-block;
  }
`

const BlockCol = styled.div``

const BlockContent = styled.div``
type BlockType = {
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'initial'
    | 'inherit'
    | 'unset'
  required?: boolean
  direction?: 'row' | 'column'
  gap?: string
  error?: boolean
}

const Block = styled.div<BlockType>`
  position: relative;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${(props) => (props.error ? 'rgba(249,72,22,0.1)' : 'white')};
  transition: background-color 0.2s linear;
  /* rgba(249,72,22,0.1) */
  &:has(${BlockCol}) {
    border: none;
    background-color: unset;
    display: flex;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => props.gap};
    align-items: flex-start;
    padding: unset;
  }

  ${BlockCol} {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  ${BlockTitle} {
    display: block;
    font-size: small;
    color: black;
  }

  &:has(input[type='checkbox']) {
    input[type='checkbox'] {
      margin-right: 0.5rem;
    }
    ${BlockTitle} {
      display: inline-block;
    }
    ${BlockContent} {
      display: inline-block;
    }
  }

  ${BlockContent} {
    color: black;

    display: flex;
    justify-content: ${(props) => props.align ?? 'flex-start'};
    align-items: flex-start;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => props.gap};
    flex-wrap: wrap;

    & > input[type='text'],
    & > input[type='email'],
    & > textarea,
    & > select {
      width: 100%;
      background-color: transparent;
      &:focus-visible {
        outline: none;
      }
    }

    & > textarea {
      height: 5rem;
      resize: none;
    }
  }

  &::after {
    content: '*';
    display: ${(props) => (props.required ? 'block' : 'none')};
    position: absolute;
    color: red;
    top: 0.5rem;
    right: 0.5rem;
    height: 0.5rem;
    width: 0.5rem;
    line-height: 0.5rem;
  }
`

const RadioButton = styled.input`
  margin-right: 0.5rem;
`
const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  & > span {
    color: white;
    background-color: red;
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    height: 0.8rem;
  }
`

export { Block, BlockTitle, BlockContent, BlockCol, RadioButton, Label }
