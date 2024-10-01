import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  LeftContainerChildOne,
  LeftContainerHeading,
  LeftContainerChildTwo,
  RightContainerHeading,
  InputContainerElement,
  InputElement,
  ButtonElement,
} from './styledComponents'

import './index.css'

class CharacterCounter extends Component {
  state = {
    list: [],
    text: '',
  }

  onChangeTextValue = event => {
    this.setState({
      text: event.target.value,
    })
  }

  onClickAddButton = () => {
    const {text} = this.state
    const id = uuid4()
    this.setState(prevState => ({
      list: [...prevState.list, {text, id}],
      text: '',
    }))
  }

  render() {
    const {list, text} = this.state
    return (
      <MainContainer>
        <LeftContainer>
          <LeftContainerChildOne>
            <LeftContainerHeading>
              Count the characters like a <br /> Boss...
            </LeftContainerHeading>
          </LeftContainerChildOne>
          <LeftContainerChildTwo>
            {list.length === 0 ? (
              <img
                src='https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'
                alt='no user inputs'
                className='image-style'
              />
            ) : (
              <ul>
                {list.map(eachItem => (
                  <li key={eachItem.id}>
                    <p>
                      {eachItem.text} : {eachItem.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </LeftContainerChildTwo>
        </LeftContainer>
        <RightContainer>
          <RightContainerHeading>Character Counter</RightContainerHeading>
          <form>
            <InputContainerElement>
              <InputElement
                type='text'
                placeholder='Enter the Characters here'
                onChange={this.onChangeTextValue}
                value={text}
              />
              <ButtonElement type='button' onClick={this.onClickAddButton}>
                Add
              </ButtonElement>
            </InputContainerElement>
          </form>
        </RightContainer>
      </MainContainer>
    )
  }
}

export default CharacterCounter
