import { forwardRef, isValidElement, memo } from 'react';
import type { ElementType } from 'react';
import Circular from '@/components/Circular';
import emotionClone from '@/utils/emotionClone';
import { cssButton, cssIcon } from './style';
import type { ButtonComponent, ButtonProps, ButtonRef } from './type';

const _Button = forwardRef(<C extends ElementType = 'button'>(props: ButtonProps<C>, ref: ButtonRef<C>) => {
  const {
    as,
    block,
    color = 'main',
    children,
    disabled,
    icon,
    loading,
    size = 'medium',
    type,
    variant = 'filled',
    ...restProps
  } = props;
  const Tag = as || 'button';

  return (
    <Tag
      ref={ref}
      {...restProps}
      css={cssButton(color, size)}
      data-n-loading={loading ? '' : undefined}
      data-n-block={block ? '' : undefined}
      data-n-variant={variant}
      data-n-disabled={disabled ? '' : undefined}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      type={type || (type || Tag === 'button' ? 'button' : type)}
    >
      {loading && <Circular data-n-loader="" />}
      <span>
        {icon && (isValidElement(icon) ? emotionClone(icon, { css: cssIcon(size) }) : icon)}
        {children}
      </span>
    </Tag>
  );
});

const Button: ButtonComponent = memo(_Button);

export default Button;
