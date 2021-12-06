export interface IEncrypter {
  encrypt: (password: string) => Promise<string>
}
