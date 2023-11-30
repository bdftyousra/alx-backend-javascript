export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if ((typeof code !== 'string') && !(code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
}
