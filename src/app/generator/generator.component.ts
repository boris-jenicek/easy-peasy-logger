import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Log } from 'easy-peasy-logger/public_api';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { Subscription } from 'rxjs';

hljs.registerLanguage('typescript', typescript);

interface IForm {
  customColor: any;
  changeColor: any;
  dummyValue: any;
  bold: any;
  italic: any;
  strikethrough: any;
  underline: any;
  size: any;
}

type TitleOptions = 'B' | 'bold' | 'I' | 'italic' | 'S' | 'strikethrough' | 'U' | 'underline' | number;

enum DummyValue {
  NONE = 'none',
  LIST = 'list',
  OBJECT = 'object'
}

enum DefinedColor {
  CUSTOM = 'customColor',
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
  PURPLE = 'purple'
}

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit, OnDestroy {
  #subscription: Subscription = new Subscription();
  @ViewChild('codeBlock') codeBlock!: ElementRef;
  definedColorEnum = DefinedColor;
  dummyValueEnum = DummyValue;
  formGroup!: FormGroup;
  code: string = ``;
  customColor = '#B19F88';
  placeholder: string = `'Log anything here..'`;

  constructor(private fb: FormBuilder) {}

  // region *** Lifecycle ***
  ngOnInit(): void {
    this.initForm();
    this.formSubscription();
    this.generateSnippet([], this.definedColorEnum.GREEN);
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }

  // endregion

  // region *** Tools ***
  generate(): void {
    const formValue = this.formGroup.value;

    const args: TitleOptions[] = [];
    let logValue: any = '';
    if (formValue.bold) {
      args.push('B');
    }
    if (formValue.italic) {
      args.push('I');
    }
    if (formValue.strikethrough) {
      args.push('S');
    }
    if (formValue.underline) {
      args.push('U');
    }
    if (formValue.size) {
      args.push(formValue.size);
    }

    // region *** Dummy value ***
    if (formValue.dummyValue === this.dummyValueEnum.LIST) {
      logValue = this.buildDummyList();
    } else if (formValue.dummyValue === this.dummyValueEnum.OBJECT) {
      logValue = this.buildDummyObject();
    } else if (formValue.dummyValue === this.dummyValueEnum.NONE) {
      logValue = 'Log anything here..';
    }
    // endregion

    const logType: DefinedColor = formValue.changeColor;
    if (logType === DefinedColor.CUSTOM) {
      Log[logType](this.customColor, 'My note...', ...args)(logValue);
    } else {
      Log[logType]('My note...', ...args)(logValue);
    }

    this.generateSnippet(args, logType);
  }

  generateSnippet(args: TitleOptions[], logType: DefinedColor): void {
    const wrappedInQuotes = args.map(item => (typeof item === 'string' ? ` '${item}'` : ` ${item}`));
    const comma = wrappedInQuotes.length ? ',' : '';
    const customColor = logType === DefinedColor.CUSTOM ? `'${this.customColor}', ` : '';
    this.code = `Log.${logType}(${customColor}'My note...'${comma}${wrappedInQuotes})(${this.placeholder});`;
    this.highlight();
  }

  highlight(): void {
    setTimeout(() => {
      hljs.highlightElement(this.codeBlock.nativeElement);
    }, 20);
  }

  buildDummyObject(): any {
    return {
      name: '@costlydeveloper/easy-peasy-logger',
      description: "The world's easy-peasy, the most fun javascript logger.",
      author: 'Boris Jenicek',
      license: 'MIT'
    };
  }

  buildDummyList(): any {
    return [
      {
        name: 'Apple',
        price: 35
      },
      {
        name: 'Banana',
        price: 12
      },
      {
        name: 'Grapes',
        price: 45
      },
      {
        name: 'Pineapple',
        price: 200
      }
    ];
  }

  // endregion

  // region *** Form ***
  initForm(): void {
    const initForm: IForm = {
      customColor: '',
      changeColor: this.definedColorEnum.GREEN,
      dummyValue: this.dummyValueEnum.NONE,
      bold: [false],
      italic: [false],
      strikethrough: [false],
      underline: [false],
      size: []
    };

    this.formGroup = this.fb.group(initForm);
  }

  formSubscription(): void {
    this.#subscription.add(
      this.formGroup.valueChanges.subscribe((value: IForm) => {
        if (typeof value.size === 'number' && value.size >= 100) {
          this.formGroup.patchValue({ size: 100 }, { emitEvent: false });
        } else if (typeof value.size === 'number' && value.size < 0) {
          this.formGroup.patchValue({ size: 5 }, { emitEvent: false });
        }
      })
    );
  }

  // endregion
}
