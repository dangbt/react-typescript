interface IInput {
  exact: boolean
  path: string
  component: any
  key: string
}
export interface IRoutes {
  map (arg0: (route: any) => JSX.Element)
  [index: number]: IInput
}
