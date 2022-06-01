import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToggle } from '../../modules/post/wallpaper';
import { RootState } from '../../modules';
import './UploadWallPaperToggle.scss';

type UploadWallPaperToggleProps = {
  text: string;
  value?: string;
  type: string;
  resetText?: () => void;
};

UploadWallPaperToggle.defaultProps = {
  value: null,
  resetText: null,
};

function UploadWallPaperToggle({ text, value, type, resetText }: UploadWallPaperToggleProps) {
  value = value || text;
  const wallpaper = useSelector((state: RootState) => state.wallpaper.data);
  const dispatch = useDispatch();

  const onClickToggle = useCallback(
    (name: string, data: string) => {
      dispatch(changeToggle(name, data));
      if (resetText) resetText();
    },
    [dispatch],
  );

  return (
    <button
      type="button"
      className={`uploadWallPaperToggle-wrapper${wallpaper[type] === value ? ' selected' : ''}`}
      onClick={() => {
        if (value) onClickToggle(type, value);
      }}
    >
      {text}
    </button>
  );
}

export default UploadWallPaperToggle;
