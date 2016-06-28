import isEmpty from 'lodash.isempty'
import React, { PropTypes } from 'react'
import classNames from 'classnames'

import DismissButton from '../DismissButton/'
import styles from './styles.css'

const ALERT_TYPES = [
  'info',
  'warning',
  'error',
  'success',
]

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissible: PropTypes.bool,
  type: PropTypes.oneOf(ALERT_TYPES),
}

const defaultProps = {
  type: ALERT_TYPES[0],
}

class Alert extends React.Component {
  constructor(props) {
    super(props)

    this.state = { dismissed: false }
    this.handleDismiss = this.handleDismiss.bind(this)
  }

  handleDismiss() {
    this.setState({ dismissed: true })
  }

  render() {
    const { children, className, dismissible, type } = this.props

    if (isEmpty(children)) return null
    if (this.state.dismissed) return null

    const classes = classNames(
      { [`${styles[type]}`]: type },
      className
    )

    return (
      <div className={classes}>
        {children}
        {dismissible && <DismissButton onDismiss={this.handleDismiss} />}
      </div>
    )
  }
}

Alert.propTypes    = propTypes
Alert.defaultProps = defaultProps

export default Alert
