import React from 'react';

import cn from 'classnames';

const Button = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {
    extraClasses,
    textColor,
    bgColor,
    borderColor,
    borderStyle,
    onClick,
    shape
  } = props;

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
            'border border-solid border-gray100': borderColor === 'gray-light',
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
            'bg-gray100 ': bgColor === 'gray-light',
            'bg-gray-light25': bgColor === 'gray-lighter',

            // shape
            'px-10 py-5': !shape,
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
  shape: "rounded" | "full-sm" | "full-md";
  borderColor: 'tiffany' | 'gray' | 'orang' | 'gray-light' | 'black',
  borderStyle: 'solid' | 'none',
  href: string,
  onClick: () => void,
  externalLink: string,
}