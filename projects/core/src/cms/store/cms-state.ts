import { EntityState, LoaderState } from '../../state/index';
import { EntityLoaderState } from '../../state/utils/entity-loader/entity-loader-state';
import { NodeItem } from '../model/node-item.model';
import { Page } from '../model/page.model';

export const CMS_FEATURE = 'cms';
export const NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
// TODO(issue:6027) - fix the const value to `[Cms] Component Entity`
export const COMPONENT_ENTITY = '[Cms[ Component Entity';

export interface StateWithCms {
  [CMS_FEATURE]: CmsState;
}

export type ComponentState = EntityLoaderState<any>;
export type ComponentsState = EntityState<ComponentsContext>;

export interface ComponentsContext {
  // TODO:#4603 - try to use `CmsComponent` type
  component: any;
  /**
   * Page context stores an information for which context doest the component exist.
   * For example, if `SiteLogoComponent` was successfully loaded for a product page with an ID of 1776948, then this object will have:
   * ```ts
   * ProductPage-1776948: {
   *  success: true,
   *  loading: false,
   *  error: false,
   *  value: true
   * }
   * ```
   *
   * The `value` indicates that the component exists for the given page context.
   *
   * If the same (`SiteLogoComponent`) component was tried to be loaded for homepage, and it doesn't exist for some reason (maybe it has a restriction),
   * then the `pageContext` will look like this:
   *
   * ```ts
   * ProductPage-1776948: {
   *  success: true,
   *  loading: false,
   *  error: false,
   *  value: true
   * },
   * ContentPage-homepage: {
   *  success: true,
   *  loading: false,
   *  error: false,
   *  value: false
   * }
   * ```
   *
   * The `value` in this case is `false` indicating that the component was tried to be loaded, but it doesn't exist or has a restriction.
   *
   */
  pageContext: {
    [context: string]: LoaderState<boolean>;
  };
}

export type IndexType = {
  content: EntityLoaderState<string>;
  product: EntityLoaderState<string>;
  category: EntityLoaderState<string>;
  catalog: EntityLoaderState<string>;
};

export interface NavigationNodes {
  [nodeId: string]: NodeItem;
}

export interface PageState {
  pageData: EntityState<Page>;
  index: IndexType;
}

export interface CmsState {
  page: PageState;
  component: ComponentState;
  components: ComponentsState;
  // TODO:#4603 - investigate if this `navigation` could be moved inside of the `componentContext` slice. Investigate the reducer and effect
  navigation: EntityLoaderState<NodeItem>;
}
