import React from 'react';
import './Loading.scss';

type LoadingProps = {
  height: number;
};

function Loading({ height }: LoadingProps) {
  return <div style={{ height: `${height}rem` }} className="loading-wrapper" />;
}

export default Loading;
