export class LogRules {
  static #isLogEnabled = true;

  static enableLog(): void {
    this.#isLogEnabled = true;
  }
  static disableLog(): void {
    this.#isLogEnabled = false;
  }
  static isLogEnabled(): boolean {
    return this.#isLogEnabled;
  }
}
