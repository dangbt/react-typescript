import React from 'react'
import _ from 'lodash'

export interface HelloProps { compiler: string; framework: string }

export const Hello = (props: HelloProps) => <h1>Hello from hihi build hihi { _.camelCase('HIHIII') } {process.env.NODE_ENV} {props.compiler} and {props.framework}!</h1>
