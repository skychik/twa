import React, {ComponentType} from 'react';
import {Popup} from '@twa.js/sdk';

import {usePopup} from './usePopup';

/**
 * HOC which passes Popup SDK component to wrapped React component.
 * @param Component - component to wrap.
 */
export function withPopup<P extends {popup?: Popup}>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, 'popup'>> {
  return function WithPopup(props: Omit<P, 'popup'>) {
    const p = {...props, popup: usePopup()} as P;

    return <Component {...p}/>;
  };
}
