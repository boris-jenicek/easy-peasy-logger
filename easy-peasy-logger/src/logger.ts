import { LogRules } from './rules';

type TitleOptions = 'B' | 'bold' | 'I' | 'italic' | 'S' | 'strikethrough' | 'U' | 'underline' | number;

export class Log {
  static customColor(color: string, title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console(color, title, titleOptions);
  }

  static green(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console('#31A821', title, titleOptions);
  }

  static red(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console('#DA5555', title, titleOptions);
  }

  static blue(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console('#5560DA', title, titleOptions);
  }

  static purple(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console('#A955DA', title, titleOptions);
  }

  static yellow(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void {
    return this.#console('#EFEC47', title, titleOptions);
  }

  static #console(color: string, title: string, titleOptions: TitleOptions[]): any {
    if (LogRules.isLogEnabled()) {
      return console.log.bind(console, `%c${title}`, `${this.#titleOptionsToCss(titleOptions)} color: ${color}`);
    } else {
      return () => {};
    }
  }

  static #titleOptionsToCss(titleOptions?: TitleOptions[]): string {
    let resp = ``;
    let textDecorationRule = '';
    if (titleOptions) {
      titleOptions.forEach(item => {
        if (item === 'B' || item === 'bold') {
          resp += 'font-weight: bold; ';
        }
        if (item === 'S' || item === 'strikethrough' || item === 'U' || item === 'underline') {
          textDecorationRule += item === 'S' || item === 'strikethrough' ? 'line-through ' : '';
          textDecorationRule += item === 'U' || item === 'underline' ? 'underline ' : '';
        }
        if (item === 'I' || item === 'italic') {
          resp += 'font-style: italic; ';
        }
        if (typeof item === 'number') {
          resp += `font-size: ${item}px; `;
        }
      });

      if (textDecorationRule) {
        resp += `text-decoration: ${textDecorationRule}; `;
      }
    }

    return resp;
  }
}
