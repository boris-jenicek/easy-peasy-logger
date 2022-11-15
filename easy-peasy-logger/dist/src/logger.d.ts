declare type TitleOptions = 'B' | 'bold' | 'I' | 'italic' | 'S' | 'strikethrough' | 'U' | 'underline' | number;
export declare class Log {
    #private;
    static customColor(color: string, title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
    static green(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
    static red(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
    static blue(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
    static purple(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
    static yellow(title: string, ...titleOptions: TitleOptions[]): (...args: any) => void;
}
export {};
