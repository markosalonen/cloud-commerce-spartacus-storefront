export namespace OccConfigurator {
  /**
   *
   * An interface representing the variant configuration consumed through OCC.
   */
  export interface Configuration {
    /**
     * @member {string} [configId]
     */
    configId?: string;
    /**
     * @member {boolean} [complete]
     */
    complete?: boolean;

    groups?: Group[];
    kbKey?: KbKey;
  }

  /**
   * Key that identifies a knowledge base ( container representing the configuration master data )
   */
  export interface KbKey {
    productCode?: string;
  }

  export interface Group {
    configurable?: boolean;
    cstics?: Characteristic[];
    description?: string;
    groupType?: GroupType;
    id?: string;
    name?: string;
  }

  export interface Characteristic {
    name?: string;
    langdepname?: string;
    type?: UiType;
    domainvalues?: Value[];
    required?: boolean;
    value?: string;
    formattedValue?: string;
    maxlength?: number;
  }

  export interface Value {
    key?: string;
    name?: string;
    langdepname?: string;
    readonly?: boolean;
    selected?: boolean;
  }

  export enum GroupType {
    CSTIC_GROUP = 'CSTIC_GROUP',
  }

  export enum UiType {
    STRING = 'STRING',
    NUMERIC = 'NUMERIC',
    CHECK_BOX = 'CHECK_BOX',
    CHECK_BOX_LIST = 'CHECK_BOX_LIST',
    RADIO_BUTTON = 'RADIO_BUTTON',
    RADIO_BUTTON_ADDITIONAL_INPUT = 'RADIO_BUTTON_ADDITIONAL_INPUT',
    DROPDOWN = 'DROPDOWN',
    DROPDOWN_ADDITIONAL_INPUT = 'DROPDOWN_ADDITIONAL_INPUT',
    READ_ONLY = 'READ_ONLY',
    NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
    SINGLE_SELECTION_IMAGE = 'SINGLE_SELECTION_IMAGE',
    MULTI_SELECTION_IMAGE = 'MULTI_SELECTION_IMAGE',
    READ_ONLY_SINGLE_SELECTION_IMAGE = 'READ_ONLY_SINGLE_SELECTION_IMAGE',
    READ_ONLY_MULTI_SELECTION_IMAGE = 'READ_ONLY_MULTI_SELECTION_IMAGE',
  }
}
