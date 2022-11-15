var _a, _Log_console, _Log_titleOptionsToCss;
import { __classPrivateFieldGet } from "tslib";
import { LogRules } from 'easy-peasy-logger/src/rules';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUl2RCxNQUFNLE9BQU8sR0FBRztJQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQzlFLE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQ3pELE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQ3ZELE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQ3hELE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQzFELE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWEsRUFBRSxHQUFHLFlBQTRCO1FBQzFELE9BQU8sdUJBQUEsSUFBSSx3QkFBUyxNQUFiLElBQUksRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FxQ0Y7K0NBbkNpQixLQUFhLEVBQUUsS0FBYSxFQUFFLFlBQTRCO0lBQ3hFLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFO1FBQzNCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxFQUFFLEVBQUUsR0FBRyx1QkFBQSxJQUFJLGtDQUFtQixNQUF2QixJQUFJLEVBQW9CLFlBQVksQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDNUc7U0FBTTtRQUNMLE9BQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQywyREFFeUIsWUFBNkI7SUFDckQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUU7UUFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbkMsSUFBSSxJQUFJLHFCQUFxQixDQUFDO2FBQy9CO1lBQ0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxlQUFlLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNwRixrQkFBa0IsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN0RixrQkFBa0IsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ2hGO1lBQ0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxzQkFBc0IsQ0FBQzthQUNoQztZQUNELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLElBQUksY0FBYyxJQUFJLE1BQU0sQ0FBQzthQUNsQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixJQUFJLElBQUksb0JBQW9CLGtCQUFrQixJQUFJLENBQUM7U0FDcEQ7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ1J1bGVzIH0gZnJvbSAnZWFzeS1wZWFzeS1sb2dnZXIvc3JjL3J1bGVzJztcblxudHlwZSBUaXRsZU9wdGlvbnMgPSAnQicgfCAnYm9sZCcgfCAnSScgfCAnaXRhbGljJyB8ICdTJyB8ICdzdHJpa2V0aHJvdWdoJyB8ICdVJyB8ICd1bmRlcmxpbmUnIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgc3RhdGljIGN1c3RvbUNvbG9yKGNvbG9yOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIC4uLnRpdGxlT3B0aW9uczogVGl0bGVPcHRpb25zW10pOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy4jY29uc29sZShjb2xvciwgdGl0bGUsIHRpdGxlT3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZ3JlZW4odGl0bGU6IHN0cmluZywgLi4udGl0bGVPcHRpb25zOiBUaXRsZU9wdGlvbnNbXSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLiNjb25zb2xlKCcjMzFBODIxJywgdGl0bGUsIHRpdGxlT3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgcmVkKHRpdGxlOiBzdHJpbmcsIC4uLnRpdGxlT3B0aW9uczogVGl0bGVPcHRpb25zW10pOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy4jY29uc29sZSgnI0RBNTU1NScsIHRpdGxlLCB0aXRsZU9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGJsdWUodGl0bGU6IHN0cmluZywgLi4udGl0bGVPcHRpb25zOiBUaXRsZU9wdGlvbnNbXSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLiNjb25zb2xlKCcjNTU2MERBJywgdGl0bGUsIHRpdGxlT3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgcHVycGxlKHRpdGxlOiBzdHJpbmcsIC4uLnRpdGxlT3B0aW9uczogVGl0bGVPcHRpb25zW10pOiAoLi4uYXJnczogYW55KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy4jY29uc29sZSgnI0E5NTVEQScsIHRpdGxlLCB0aXRsZU9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIHllbGxvdyh0aXRsZTogc3RyaW5nLCAuLi50aXRsZU9wdGlvbnM6IFRpdGxlT3B0aW9uc1tdKTogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnNvbGUoJyNFRkVDNDcnLCB0aXRsZSwgdGl0bGVPcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyAjY29uc29sZShjb2xvcjogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCB0aXRsZU9wdGlvbnM6IFRpdGxlT3B0aW9uc1tdKTogYW55IHtcbiAgICBpZiAoTG9nUnVsZXMuaXNMb2dFbmFibGVkKCkpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsIGAlYyR7dGl0bGV9YCwgYCR7dGhpcy4jdGl0bGVPcHRpb25zVG9Dc3ModGl0bGVPcHRpb25zKX0gY29sb3I6ICR7Y29sb3J9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoKSA9PiB7fTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgI3RpdGxlT3B0aW9uc1RvQ3NzKHRpdGxlT3B0aW9ucz86IFRpdGxlT3B0aW9uc1tdKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzcCA9IGBgO1xuICAgIGxldCB0ZXh0RGVjb3JhdGlvblJ1bGUgPSAnJztcbiAgICBpZiAodGl0bGVPcHRpb25zKSB7XG4gICAgICB0aXRsZU9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdCJyB8fCBpdGVtID09PSAnYm9sZCcpIHtcbiAgICAgICAgICByZXNwICs9ICdmb250LXdlaWdodDogYm9sZDsgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PT0gJ1MnIHx8IGl0ZW0gPT09ICdzdHJpa2V0aHJvdWdoJyB8fCBpdGVtID09PSAnVScgfHwgaXRlbSA9PT0gJ3VuZGVybGluZScpIHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblJ1bGUgKz0gaXRlbSA9PT0gJ1MnIHx8IGl0ZW0gPT09ICdzdHJpa2V0aHJvdWdoJyA/ICdsaW5lLXRocm91Z2ggJyA6ICcnO1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uUnVsZSArPSBpdGVtID09PSAnVScgfHwgaXRlbSA9PT0gJ3VuZGVybGluZScgPyAndW5kZXJsaW5lICcgOiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PT0gJ0knIHx8IGl0ZW0gPT09ICdpdGFsaWMnKSB7XG4gICAgICAgICAgcmVzcCArPSAnZm9udC1zdHlsZTogaXRhbGljOyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXNwICs9IGBmb250LXNpemU6ICR7aXRlbX1weDsgYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXh0RGVjb3JhdGlvblJ1bGUpIHtcbiAgICAgICAgcmVzcCArPSBgdGV4dC1kZWNvcmF0aW9uOiAke3RleHREZWNvcmF0aW9uUnVsZX07IGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cbn1cbiJdfQ==