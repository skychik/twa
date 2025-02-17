import React, {ComponentType} from 'react';
import {HapticFeedback} from '@twa.js/sdk';

import {useHapticFeedback} from './useHapticFeedback';

/**
 * HOC which passes HapticFeedback SDK component to wrapped React component.
 * @param Component - component to wrap.
 */
export function withHapticFeedback<P extends {hapticFeedback?: HapticFeedback}>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, 'hapticFeedback'>> {
  return function WithHapticFeedback(props: Omit<P, 'hapticFeedback'>) {
    const p = {...props, hapticFeedback: useHapticFeedback()} as P;

    return <Component {...p}/>;
  };
}
