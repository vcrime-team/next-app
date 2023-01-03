import type { ElementType, ReactElement, ReactNode } from 'react';
import type { PolymorphicRef, PolymorphicPropsWithRef, PolymorphicRestProps } from '@/@types/polyElem';

export type ButtonRef<C extends ElementType> = PolymorphicRef<C>;

export type ButtonProps<C extends ElementType> = PolymorphicRestProps<
  C,
  {
    as?: C;
    block?: boolean;
    color?: string;
    disabled?: boolean;
    icon?: ReactNode;
    loading?: boolean;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    variant?: 'filled' | 'ghost' | 'text';
  }
>;

export type ButtonComponent = <C extends ElementType = 'button'>(
  props: PolymorphicPropsWithRef<ButtonProps<C>, ButtonRef<C>>,
) => ReactElement | null;
