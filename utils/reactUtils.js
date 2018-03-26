import React from 'react'

function childrenWithProps(children, props)
{
    return React.Children.map(props.children, x => React.cloneElement(x, {...props}))
}

export { childrenWithProps }