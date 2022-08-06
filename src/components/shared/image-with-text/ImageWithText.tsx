import React from "react";
import "./ImageWithText.scss"
import cn from 'classnames';

const ImageWithText =
  React.forwardRef(({ children, ...props }: any, ref: any) => {
    let { imageUrl, contentPosition, customClasses, redirectUrl } = props
    return (
      <>
        <div className={cn('content', customClasses)}>
          <a href={redirectUrl} target="_blank" >
            <div className="content-overlay"></div>
            <img className="w-full h-full object-cover" src={imageUrl} alt="" />
            <div className={cn('content-details', { "middle-details": !contentPosition || contentPosition === "middle", "bottom-details": contentPosition === "bottom" })} >
              {children}
            </div>
          </a>
        </div >
      </>
    );
  });

export default ImageWithText;

interface Data {
  imageUrl: string;
  contentPosition: "middle" | "bottom";
  customClasses?: string;
  redirectUrl?: string
  // children?: Element | Element[]
}