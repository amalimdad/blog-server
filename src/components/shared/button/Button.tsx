import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {
    customClassName,
    textColor,
    bgColor,
    btnSize,
    borderColor,
    borderStyle,
    href,
    onClick,
    externalLink,
    rounded
  } = props;
  return (
    <>
      <a
        onClick={onClick}
        href={`${href ? href : ''}`}
        ref={ref}
        target={externalLink && '_blank'}
        className={cn(
          'flex items-center justify-center',
          'global-btn inline-block text-center hover:shadow-btn transform hover:-translate-y-.5 transition-all duration-200 ',
          {
            // border
            'border-none': !borderStyle,
            'border border-solid': borderStyle === 'solid',
            'border-': borderColor === 'blue',
            'border-c200': borderColor === 'green',
            'border-black900': borderColor === 'black',

            // colors
            'text-black900': !textColor,
            'text-white': bgColor === 'primary',
            'text-c800': textColor === 'gray',
            'text-c200': textColor === 'green',

            //bg Color
            'bg-c000': !bgColor,
            'bg-black': bgColor === 'black',
            'bg-tiffany': bgColor === 'primary',
            'bg-orang': bgColor === 'secondary',
            //spacing
            ' w-48 h-20': !btnSize,
            ' w-32 h-16': btnSize === 'small',
            ' w-32 sm:w-64 h-16': btnSize === 'medium',
            ' w-64 sm:w-72 h-16': btnSize === 'large',
            ' w-64 sm:w-72 h-20': btnSize === 'largeTall',


          },
          customClassName
        )}
      >
        {children}
      </a>
    </>
  );
});

export default Button;

interface ButtonProps {
  customClassName: string,
  textColor: '',
  bgColor: "transparent" | "black" | "primary" | "secondary",
  btnSize: 'sma' | 'md',
  borderColor: string,
  borderStyle: string,
  href: string,
  onClick: () => void,
  externalLink: string,
  rounded: 'full' | "md"
}