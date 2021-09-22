import { NotImplementedError } from '../extensions/index.js';

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

  encrypt(message, key) {
    this.validate(message, key)
    message = message.toUpperCase()
    key = key.toUpperCase()
    let cipher = ''
    let j = 0
    //let maxlength = Math.max(message.length, key.length)
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let iMes = this.a.indexOf(message[i])
        let iKey = this.a.indexOf(key[(j >= key.length ? j % key.length : j)])
        cipher += this.a[(iMes + iKey) % this.a.length]
        j++
        //continue
      } else {
        cipher += message[i]
      }

    }
    return this.reverse ? cipher.split('').reverse().join('') : cipher
  }
  decrypt(cipher, key) {
    this.validate(cipher, key)
    cipher = cipher.toUpperCase()
    key = key.toUpperCase()
    let message = ''
    let j = 0
    //let maxlength = Math.max(cipher.length, key.length)
    for (let i = 0; i < cipher.length; i++) {
      if (cipher[i].match(/[A-Z]/)) {
        let iMes = this.a.indexOf(cipher[i])
        let iKey = this.a.indexOf(key[(j >= key.length ? j % key.length : j)])
        message += this.a[(iMes + this.a.length - iKey) % this.a.length]
        j++
        //continue
      } else {
        message += cipher[i]
      }
    }
    return this.reverse ? message.split('').reverse().join('') : message
  }
}
