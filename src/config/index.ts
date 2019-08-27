
interface IInput {
  API_URL: string
}
interface IConfig {
  development: IInput,
  production: IInput
}
const config: IConfig = {
  development: {
    API_URL: 'http://localhost:3000'
  },
  production: {
    API_URL: 'http://localhost:3000'
  }
}

export default config[process.env.NODE_ENV || 'development']
