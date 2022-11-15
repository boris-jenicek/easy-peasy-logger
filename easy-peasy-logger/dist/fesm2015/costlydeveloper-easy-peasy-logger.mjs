import { __classPrivateFieldGet, __classPrivateFieldSet } from 'tslib';
import { LogRules as LogRules$1 } from 'easy-peasy-logger/src/rules';

var _a$1, _Log_console, _Log_titleOptionsToCss;
class Log {
    static customColor(color, title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, color, title, titleOptions);
    }
    static green(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, '#31A821', title, titleOptions);
    }
    static red(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, '#DA5555', title, titleOptions);
    }
    static blue(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, '#5560DA', title, titleOptions);
    }
    static purple(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, '#A955DA', title, titleOptions);
    }
    static yellow(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a$1, "m", _Log_console).call(this, '#EFEC47', title, titleOptions);
    }
}
_a$1 = Log, _Log_console = function _Log_console(color, title, titleOptions) {
    if (LogRules$1.isLogEnabled()) {
        return console.log.bind(console, `%c${title}`, `${__classPrivateFieldGet(this, _a$1, "m", _Log_titleOptionsToCss).call(this, titleOptions)} color: ${color}`);
    }
    else {
        return () => { };
    }
}, _Log_titleOptionsToCss = function _Log_titleOptionsToCss(titleOptions) {
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
};

var _a, _LogRules_isLogEnabled;
class LogRules {
    static enableLog() {
        __classPrivateFieldSet(this, _a, true, "f", _LogRules_isLogEnabled);
    }
    static disableLog() {
        __classPrivateFieldSet(this, _a, false, "f", _LogRules_isLogEnabled);
    }
    static isLogEnabled() {
        return __classPrivateFieldGet(this, _a, "f", _LogRules_isLogEnabled);
    }
}
_a = LogRules;
_LogRules_isLogEnabled = { value: true };

export { Log, LogRules };
//# sourceMappingURL=costlydeveloper-easy-peasy-logger.mjs.map
