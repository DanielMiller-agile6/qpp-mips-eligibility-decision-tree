import React from 'react'
import { Button } from '@trussworks/react-uswds'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@trussworks/react-uswds/lib/index.css'

const DialogItem = ({
  className = "",
  header = "Missing Header",
  actions = [],
  onActionSelect = () => {},
  onCancel = () => {},
  first = false
}) => (
  <div className={`qpp-dt-dialog-item ${className}`}>
    {/* <FontAwesomeIcon icon="question" size="lg"/> */}
    <h2>{header}</h2>
    <div style={{ marginLeft: '15%', marginRight: '15%' }}>
      {!first && (
        <span className="qpp-dt-back" style={{ float: 'left' }}>
          <Button small outline className="qpp-dt-btn-cancel" onClick={onCancel}>
            Back
          </Button>
        </span>
      )}
      <span style={{ float: 'right' }}>
        {actions.map(({ to, label}, i) => (
          <Button
            key={to}
            className="qpp-dt-btn-action"
            onClick={() => onActionSelect(to)}
          >

            {label}
          </Button>
        ))}
      </span>
    </div>
  </div>
)

export default DialogItem
