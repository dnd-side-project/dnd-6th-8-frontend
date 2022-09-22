import axios from 'axios';

const token = localStorage.getItem('accessToken');
// axios instance 생성
const instance = axios.create({
  baseURL: 'https://tracious-api.shop',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// 인터셉터는 요청직전, 응답받고 then, catch처리 직전에 가로챈 후 처리함.
// 콜백함수 2개씩 받음

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 요청 직전 호출됨 (axios 설정값 넣기)
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됨
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    // 200인 경우. 응답 성공 직전 호출됨. then으로 이어짐
    console.log(response);
    return response.data;
  },
  (error) => {
    // 200이 아닌 경우. 응답 에러 직전 호출되며 catch로 이어짐
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;

export type LoginType = {
  token: string;
};

export const userLogin = (type: string) => axios.post(`/auth/${type}`);
