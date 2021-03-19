import React, { useRef } from "react";

export default function MenuFrame({ video, descr, img }) {
  const ref = useRef(null);
  return (
    <div className="container__block" id="menu__enter">
      <video className="video2 videoPlay" id="v1" muted loop ref={ref}>
        <source src={video} />
      </video>
      <div
        className="block__descr_container"
        onMouseEnter={() => ref != null && ref.current.play()}
        onMouseLeave={() => ref != null && ref.current.pause()}
      >
        <div className="block_descr v1">
          <img src={img} alt="menu" className="block_img" />
         
            <p className="block__header">Наше меню</p>
          <p className="block__text">{descr}</p>
        </div>
      </div>
    </div>
  );
}
