import React from 'react'
import _ from 'lodash'

export interface HelloProps { compiler: string; framework: string }

export const About = (props: HelloProps) => {
  return (
    <h1>Hello {_.camelCase('Foo Bar')} from hihi build hihi {process.env.NODE_ENV} {props.compiler} and {props.framework}!</h1>
  )
}
