import {useState} from 'react'
import {Container, LockImage, LockPara, LockButton} from './styledComponents'

const Unlock = () => {
  const [lockStatus, unLockFunction] = useState(true)

  const changeLockStatus = () => {
    unLockFunction(prevStatus => !prevStatus)
  }

  const btnText = lockStatus ? 'Unlock' : 'Lock'
  const paraText = lockStatus
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const altText = lockStatus ? 'Lock' : 'Unlock'
  const imgUrl = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <Container>
      <LockImage src={imgUrl} alt={altText} />
      <LockPara>{paraText}</LockPara>
      <LockButton type="button" onClick={changeLockStatus}>
        {btnText}
      </LockButton>
    </Container>
  )
}

export default Unlock
