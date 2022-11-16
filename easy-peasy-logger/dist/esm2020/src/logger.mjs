var _a, _Log_console, _Log_titleOptionsToCss;
import { __classPrivateFieldGet } from "tslib";
import { LogRules } from './rules';
export class Log {
    static customColor(color, title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, color, title, titleOptions);
    }
    static green(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, '#31A821', title, titleOptions);
    }
    static red(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, '#DA5555', title, titleOptions);
    }
    static blue(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, '#5560DA', title, titleOptions);
    }
    static purple(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, '#A955DA', title, titleOptions);
    }
    static yellow(title, ...titleOptions) {
        return __classPrivateFieldGet(this, _a, "m", _Log_console).call(this, '#EFEC47', title, titleOptions);
    }
}
_a = Log, _Log_console = function _Log_console(color, title, titleOptions) {
    if (LogRules.isLogEnabled()) {
        return console.log.bind(console, `%c${title}`, `${__classPrivateFieldGet(this, _a, "m", _Log_titleOptionsToCss).call(this, titleOptions)} color: ${color}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJbkMsTUFBTSxPQUFPLEdBQUc7SUFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUM5RSxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUN6RCxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUN2RCxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUN4RCxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUMxRCxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhLEVBQUUsR0FBRyxZQUE0QjtRQUMxRCxPQUFPLHVCQUFBLElBQUksd0JBQVMsTUFBYixJQUFJLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBcUNGOytDQW5DaUIsS0FBYSxFQUFFLEtBQWEsRUFBRSxZQUE0QjtJQUN4RSxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRTtRQUMzQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsdUJBQUEsSUFBSSxrQ0FBbUIsTUFBdkIsSUFBSSxFQUFvQixZQUFZLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzVHO1NBQU07UUFDTCxPQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUMsMkRBRXlCLFlBQTZCO0lBQ3JELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzVCLElBQUksWUFBWSxFQUFFO1FBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxxQkFBcUIsQ0FBQzthQUMvQjtZQUNELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssZUFBZSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDcEYsa0JBQWtCLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdEYsa0JBQWtCLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNoRjtZQUNELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNyQyxJQUFJLElBQUksc0JBQXNCLENBQUM7YUFDaEM7WUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLGNBQWMsSUFBSSxNQUFNLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksa0JBQWtCLEVBQUU7WUFDdEIsSUFBSSxJQUFJLG9CQUFvQixrQkFBa0IsSUFBSSxDQUFDO1NBQ3BEO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dSdWxlcyB9IGZyb20gJy4vcnVsZXMnO1xuXG50eXBlIFRpdGxlT3B0aW9ucyA9ICdCJyB8ICdib2xkJyB8ICdJJyB8ICdpdGFsaWMnIHwgJ1MnIHwgJ3N0cmlrZXRocm91Z2gnIHwgJ1UnIHwgJ3VuZGVybGluZScgfCBudW1iZXI7XG5cbmV4cG9ydCBjbGFzcyBMb2cge1xuICBzdGF0aWMgY3VzdG9tQ29sb3IoY29sb3I6IHN0cmluZywgdGl0bGU6IHN0cmluZywgLi4udGl0bGVPcHRpb25zOiBUaXRsZU9wdGlvbnNbXSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLiNjb25zb2xlKGNvbG9yLCB0aXRsZSwgdGl0bGVPcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBncmVlbih0aXRsZTogc3RyaW5nLCAuLi50aXRsZU9wdGlvbnM6IFRpdGxlT3B0aW9uc1tdKTogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnNvbGUoJyMzMUE4MjEnLCB0aXRsZSwgdGl0bGVPcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyByZWQodGl0bGU6IHN0cmluZywgLi4udGl0bGVPcHRpb25zOiBUaXRsZU9wdGlvbnNbXSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLiNjb25zb2xlKCcjREE1NTU1JywgdGl0bGUsIHRpdGxlT3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgYmx1ZSh0aXRsZTogc3RyaW5nLCAuLi50aXRsZU9wdGlvbnM6IFRpdGxlT3B0aW9uc1tdKTogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnNvbGUoJyM1NTYwREEnLCB0aXRsZSwgdGl0bGVPcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBwdXJwbGUodGl0bGU6IHN0cmluZywgLi4udGl0bGVPcHRpb25zOiBUaXRsZU9wdGlvbnNbXSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLiNjb25zb2xlKCcjQTk1NURBJywgdGl0bGUsIHRpdGxlT3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgeWVsbG93KHRpdGxlOiBzdHJpbmcsIC4uLnRpdGxlT3B0aW9uczogVGl0bGVPcHRpb25zW10pOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy4jY29uc29sZSgnI0VGRUM0NycsIHRpdGxlLCB0aXRsZU9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljICNjb25zb2xlKGNvbG9yOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHRpdGxlT3B0aW9uczogVGl0bGVPcHRpb25zW10pOiBhbnkge1xuICAgIGlmIChMb2dSdWxlcy5pc0xvZ0VuYWJsZWQoKSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgYCVjJHt0aXRsZX1gLCBgJHt0aGlzLiN0aXRsZU9wdGlvbnNUb0Nzcyh0aXRsZU9wdGlvbnMpfSBjb2xvcjogJHtjb2xvcn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyAjdGl0bGVPcHRpb25zVG9Dc3ModGl0bGVPcHRpb25zPzogVGl0bGVPcHRpb25zW10pOiBzdHJpbmcge1xuICAgIGxldCByZXNwID0gYGA7XG4gICAgbGV0IHRleHREZWNvcmF0aW9uUnVsZSA9ICcnO1xuICAgIGlmICh0aXRsZU9wdGlvbnMpIHtcbiAgICAgIHRpdGxlT3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbSA9PT0gJ0InIHx8IGl0ZW0gPT09ICdib2xkJykge1xuICAgICAgICAgIHJlc3AgKz0gJ2ZvbnQtd2VpZ2h0OiBib2xkOyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnUycgfHwgaXRlbSA9PT0gJ3N0cmlrZXRocm91Z2gnIHx8IGl0ZW0gPT09ICdVJyB8fCBpdGVtID09PSAndW5kZXJsaW5lJykge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uUnVsZSArPSBpdGVtID09PSAnUycgfHwgaXRlbSA9PT0gJ3N0cmlrZXRocm91Z2gnID8gJ2xpbmUtdGhyb3VnaCAnIDogJyc7XG4gICAgICAgICAgdGV4dERlY29yYXRpb25SdWxlICs9IGl0ZW0gPT09ICdVJyB8fCBpdGVtID09PSAndW5kZXJsaW5lJyA/ICd1bmRlcmxpbmUgJyA6ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnSScgfHwgaXRlbSA9PT0gJ2l0YWxpYycpIHtcbiAgICAgICAgICByZXNwICs9ICdmb250LXN0eWxlOiBpdGFsaWM7ICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJlc3AgKz0gYGZvbnQtc2l6ZTogJHtpdGVtfXB4OyBgO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRleHREZWNvcmF0aW9uUnVsZSkge1xuICAgICAgICByZXNwICs9IGB0ZXh0LWRlY29yYXRpb246ICR7dGV4dERlY29yYXRpb25SdWxlfTsgYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcDtcbiAgfVxufVxuIl19