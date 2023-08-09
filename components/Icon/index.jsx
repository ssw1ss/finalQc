import React from 'react'
import Buffalo from './Buffalo'

import Cow from './Cow'
import Goat from './Goat'
import Sheep from './Sheep'
import Pin from './Pin'
import Phone from './Phone'

const Icon = props => {
  switch (props.icon) {
    case 'Buffalo':
      return <Buffalo {...props} />
    case 'Cow':
      return <Cow {...props} />
    case 'Goat':
      return <Goat {...props} />
    case 'Sheep':
      return <Sheep {...props} />
    case 'pin':
      return <Pin {...props} />
    case 'phone':
      return <Phone {...props} />
    default:
      return <div>no</div>
  }
}

export default Icon
