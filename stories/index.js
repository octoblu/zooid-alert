import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Alert from '../src'

storiesOf('Alert', module)
  .addWithInfo('Basic', 'added Description', () => (
    <Alert />
  ), { inline: true })
  .add('Basic', () => (
    <Alert />
  ))
