import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  onDismiss: PropTypes.func.isRequired,
}

const DismissButton = ({ onDismiss }) => {
  return (
    <button
      onClick={onDismiss}
      className={styles.root}
    >
      ×
    </button>
  )
}

DismissButton.propTypes = propTypes

export default DismissButton
