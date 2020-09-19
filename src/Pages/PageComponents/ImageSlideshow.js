import React, { useState, useEffect } from "react";
import useInterval from "react-useinterval";
import { useTransition, animated, config } from "react-spring";
import './ImageSlideshow.css'
const slides = [
  {
    id: 0,
    url:
      "https://images.unsplash.com/photo-1591128443963-7b51100a2ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1591325473862-01d8b43d880a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1591881143888-bfbd98b6194d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1591698646894-1790b414f37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
  },
  {
    id: 4,
    url:
      "https://images.unsplash.com/photo-1591155426209-23831d47700d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80"
  },
  {
    id: 5,
    url:
      "https://images.unsplash.com/photo-1592036160420-8e862f871b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
  }
];

const ImageSlideshow = () => {
  const [index, set] = useState(0);
  const item = slides[index];
  const increment = () => set(state => (state + 1) % slides.length);
  // useInterval(increment, 3000);

  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1},
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return transitions.map(({ item, props, key }) => {
    return (
      <animated.div
        key={key}
        class="bg"
        style={{
          backgroundImage: `url(${item.url})`,
          ...props
        }}
      />
    );
  });
};

export default ImageSlideshow;


