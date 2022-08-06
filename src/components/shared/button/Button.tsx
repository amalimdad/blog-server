import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {
    extraClasses,
    textColor,
    bgColor,
    btnSize,
    borderColor,
    borderStyle,
    onClick,
    shape
  } = props;
  console.log(btnSize, shape, !btnSize && !shape);

  return (
    <>
      <button
        onClick={onClick}
        ref={ref}
        className={cn(
          'flex items-center justify-center',
          'inline-block text-center hover:shadow-popup transform transition-all duration-200 ',
          {
            // border
            'border-none': !borderColor || borderStyle === 'none',
            'border border-solid border-black ': borderStyle === 'solid',
            'border border-solid border-tiffany': borderColor === 'tiffany',
            'border border-solid border-black600': borderColor === 'gray',
            'border border-solid border-orang': borderColor === 'orang',
            'border border-solid border-grayNeutrals100': borderColor === 'gray-light',
            'border border-solid border-black': borderColor === 'black',

            // colors
            'text-black900': !textColor && !bgColor,
            'text-tiffany': textColor === 'tiffany',
            'text-black600': textColor === 'gray',
            'text-orang': textColor === 'orang',

            //bg Color
            'bg-white': !bgColor && !textColor,
            ' text-white': bgColor === 'white',
            'bg-black text-white': bgColor === 'black',
            'bg-tiffany text-white': bgColor === 'tiffany',
            'bg-orang text-white': bgColor === 'orang',
            'bg-transparent': bgColor === 'transparent',
            'bg-grayNeutrals100 ': bgColor === 'gray-light',
            'bg-gray-light25': bgColor === 'gray-lighter',

            // //spacing
            // ' w-48 h-20': !btnSize && !shape,
            // ' w-32 h-16': btnSize === 'sm',
            // ' w-32 sm:w-64 h-16': btnSize === 'md',
            // ' w-64 sm:w-72 h-16': btnSize === 'lg',

            // shape
            'rounded': !shape,
            'w-24 h-24 rounded-full': shape === 'full-sm',
            'w-32 h-32 rounded-full': shape === 'full-md'
          },
          extraClasses
        )}
      >
        {children}
      </button>
    </>
  );
});

export default Button;

interface ButtonProps {
  extraClasses: string,
  textColor: 'tiffany' | 'gray' | 'orang' | 'white',
  bgColor: "transparent" | "black" | "tiffany" | "orang" | 'gray-light' | "gray-lighter",
  btnSize: 'sm' | 'md' | 'lg',
  shape: "full-sm" | "full-md";
  borderColor: 'tiffany' | 'gray' | 'orang' | 'gray-light' | 'black',
  borderStyle: 'solid' | 'none',
  href: string,
  onClick: () => void,
  externalLink: string,
}