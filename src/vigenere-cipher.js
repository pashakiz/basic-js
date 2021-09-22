/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(isForward) {
    this.a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.reverse = isForward === false ? true : false
  }

  validate(message, key) {
    if (message === undefined || key === undefined)
      throw Error('Incorrect arguments!')
  }

  ciphering(message, key, mode) {
    this.validate(message, key)
    message = message.toUpperCase()
    key = key.toUpperCase()
    let res = ''
    let j = 0
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let iMes = this.a.indexOf(message[i])
        let iKey = this.a.indexOf(key[(j >= key.length ? j % key.length : j)])
        if (mode === 'encrypt')
          res += this.a[(iMes + iKey) % this.a.length]
        if (mode === 'decrypt')
          res += this.a[(iMes + this.a.length - iKey) % this.a.length]
        j++
      } else {
        res += message[i]
      }

    }
    return this.reverse ? res.split('').reverse().join('') : res
  }

  encrypt(message, key) {
    return this.ciphering(message, key, 'encrypt')
  }
  decrypt(cipher, key) {
    return this.ciphering(cipher, key, 'decrypt')
  }
}
