import React, { useMemo, useReducer } from 'react'
import DialogItem from './DialogItem'
import decisionNodes from './decision-tree.json'

const nodesReducer = (state = [], action) => {
  switch (action.type) {
    case 'decision': {
      const newNode = decisionNodes.find(node => node.id === action.payload)
      return [ ...state, newNode ]
    }
    case 'back': {
      return state.slice(0, Math.max(state.length - 1, 0))
    }
    default: {
      return state
    }
  }
}

const MipsDecisionTree = () => {
  const startingNode = decisionNodes[0]
  const [nodes, dispatch] = useReducer(nodesReducer, [startingNode])

  const decisionAction = useMemo(() => (nextNode) => dispatch({
    type: 'decision',
    payload: nextNode
  }), [dispatch])

  const backAction = useMemo(() => () => dispatch({ type: 'back' }), [dispatch])

  const node = nodes[nodes.length - 1]

  return (
    <div className="qpp-mips-decision-tree">
      <DialogItem
        key={node.id}
        header={node.prompt}
        actions={node.actions}
        onActionSelect={decisionAction}
        onCancel={backAction}
        first={node.id === startingNode.id}
      />
    </div>
  )
}

export default MipsDecisionTree
