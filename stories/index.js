import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Alert from '../src'

storiesOf('Alert', module)
  .addWithInfo('Basic', 'Alerts for days!', () => (
    <div>
      <Alert>Basic Info Message</Alert>
      <Alert type="warning">Basic Warning Message</Alert>
      <Alert type="error">Basic Error Message</Alert>
      <Alert type="success">Basic Success Message</Alert>
    </div>
  ), { inline: true })
  .addWithInfo('Dismissible', 'A dismissible alert', () => (
    <div>
      <Alert dismissible>Dismissible Alert Message</Alert>
      <Alert type="warning" dismissible>Dismissible Warning Message</Alert>
      <Alert type="error" dismissible>Dismissible Error Message</Alert>
      <Alert type="success" dismissible>Dismissible Success Message</Alert>
    </div>
  ), { inline: true })
