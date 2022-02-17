import React from 'react';
import './UploadDayTextArea.scss';

type UploadDayTextAreaProps = {
  long?: boolean;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => void;
  day: number;
  value: string;
};

UploadDayTextArea.defaultProps = {
  long: false,
};

function UploadDayTextArea({ long, onInput, day, value }: UploadDayTextAreaProps) {
  const count: number = value.length;
  return (
    <div className="uploadDayTextArea-wrapper">
      <textarea
        placeholder="커뮤니티상 적절하지 않은 글을 게시할 경우 신고 조치될 수 있습니다."
        className={long ? 'long' : ''}
        onChange={(e) => onInput(e, day)}
        value={value}
        maxLength={long ? 800 : 300}
      />
      <div className="count">
        <span>{count}</span>
        <span>{`/${long ? '800' : '300'}`}</span>
      </div>
    </div>
  );
}

export default UploadDayTextArea;
