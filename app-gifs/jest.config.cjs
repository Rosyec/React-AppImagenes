module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  preset: 'ts-jest',
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["jest-extended/all"]


  /** JEST
  * * Para que jest detecte los archivos .css es necesario agregar
  * * el moduleNameMapper e instalar la dependencia 'identy-obj-proxy' */
}