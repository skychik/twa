/**
 * This object describes the native popup.
 * @see https://core.telegram.org/bots/webapps#popupparams
 */
interface PopupParams {
  /**
   * The text to be displayed in the popup title, 0-64 characters.
   * @default ""
   */
  title?: string;
  
  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string;
  
  /**
   * List of buttons to be displayed in the popup, 1-3 buttons.
   * @default [{type: 'close'}]
   */
  buttons?: PopupButton[]
}

/**
 * This object describes the native popup button.
 * @see https://core.telegram.org/bots/webapps#popupbutton
 */
type PopupButton = {
  /**
   * Identifier of the button, 0-64 characters.
   * @default ""
   */
  id?: string;
} & (
  {
    /**
     * Type of the button:
     * - `default`, a button with the default style;
     * - `destructive`, a button with a style that indicates a destructive
     * action (e.g. "Remove", "Delete", etc.).
     *
     * @default "default"
     */
    type?: 'default' | 'destructive';
    /**
     * The text to be displayed on the button, 0-64 characters.
     */
    text: string;
  } | {
  /**
   * Type of the button:
   * - `ok`, a button with the localized text "OK";
   * - `close`, a button with the localized text "Close";
   * - `cancel`, a button with the localized text "Cancel".
   */
  type: 'ok' | 'close' | 'cancel';
});

export {PopupParams, PopupButton};