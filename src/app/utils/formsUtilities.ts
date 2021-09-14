import { AngularEditorConfig } from '@kolkov/angular-editor';

export default class FormsUtilities {
  static readonly MAX_LENGTH_NAME: number = 50;
  static readonly MAX_LENGTH_DESCRIPTION: number = 200;
  static readonly REG_EXP_NAME = "^<>{}|¡!@#$%&/()=¿?_-";
  static readonly REG_EXP_DESCRIPTION = "^<>{}|@#$%&/=_-";
  static readonly REG_EXP_RT_DESCRIPTION = "^{}|@$%_";

  static readonly textEditorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    toolbarHiddenButtons: [
      ['outdent',
        'indent',
        'subscript',
        'superscript',
        'textColor',
        'backgroundColor',
        'strikeThrough',
        'undo',
        'redo',
        'justifyRight',
        'heading',
        'fontName',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'toggleEditorMode',
        'customClasses',
        'link',
        'unlink',
        'fontSize',
      ],
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    sanitize: false
  };

  errorMsg = new Map([
    ["required", 'Este campo no puede estar vacio.'],
    ["pattern", ''],
    ["maxlength", ''],
  ]);

  getInputError(error: string, type: string): string {
    switch (type) {
      case "name":
        this.errorMsg
        .set("pattern", `Los caracteres no ${FormsUtilities.REG_EXP_NAME} están permitidos.`);
        this.errorMsg
        .set("maxlength", `No debe ser mayor a ${FormsUtilities.MAX_LENGTH_NAME} caracteres.`);
        return this.getMessageError(error);
      case "description":
        this.errorMsg
        .set("pattern", `Los caracteres no ${FormsUtilities.REG_EXP_RT_DESCRIPTION} están permitidos.`);
        this.errorMsg
        .set("maxlength", `No debe ser mayor a ${FormsUtilities.MAX_LENGTH_DESCRIPTION} caracteres.`);
        return this.getMessageError(error);
      default:
        this.errorMsg
        .set("pattern", `Los caracteres no ${FormsUtilities.REG_EXP_DESCRIPTION} están permitidos.`);
        this.errorMsg
        .set("maxlength", `No debe ser mayor a ${FormsUtilities.MAX_LENGTH_DESCRIPTION} caracteres.`);
        return this.getMessageError(error);
    }
  }

  private getMessageError(error:string){
    return this.errorMsg.get(error) || '';
  }

}