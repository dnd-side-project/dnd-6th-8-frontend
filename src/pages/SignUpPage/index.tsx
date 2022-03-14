import React, { useCallback, useState } from 'react';
import './style.scss';

function SignUpPage() {
  const [nickName, setNickName] = useState<string>('');
  const [nickNameOver, setNickNameOver] = useState<boolean>(false);

  const NickNameChange = useCallback(
    (e) => {
      setNickName(e.target.value);
      if (e.target.value.length >= 20) {
        setNickNameOver(true);
      } else {
        setNickNameOver(false);
      }
    },
    [nickName],
  );

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    console.log(nickName);
  }, [nickName]);

  return (
    <div className="signuppage-wrapper">
      <p>마지막,</p>
      <p>
        트레셔스에서 사용할 닉네임을 <br /> 알려주세요.
      </p>
      <form onSubmit={onSubmitHandler}>
        {nickNameOver ? (
          <>
            <input className='red-alert' placeholder="닉네임" onChange={NickNameChange} required />
            <span className='red-text'>20자를 초과하였습니다.</span>
            <button type="button" disabled className="gray">
              트레셔스 가입 완료
            </button>
          </>
        ) : (
          <>
            <input placeholder="닉네임" onChange={NickNameChange} required />
            {nickName ? (
              <button type="submit" className="blue">
                트레셔스 가입 완료
              </button>
            ) : (
              <button type="button" disabled className="gray">
                트레셔스 가입 완료
              </button>
            )}
          </>
        )}
      </form>
    </div>
  );
}

export default SignUpPage;
