import { ThunkAction } from 'redux-thunk';
import produce from 'immer';
import axios, { AxiosError, AxiosResponse } from 'axios';
import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
const ADD_DAY = 'days/ADD_DAY' as const;
const DELETE_DAY = 'days/DELETE_DAY' as const;
const INPUT_DATE = 'days/INPUT_DATE' as const;
const INPUT_WEATHER = 'days/INPUT_WEATHER' as const;
const UPLOAD_IMAGE = 'days/UPLOAD_IMAGE' as const;
const DELETE_IMAGE = 'days/DELETE_IMAGE' as const;
const CHANGE_LOCATION = 'days/CHANGE_LOCATION' as const;
const MODIFY_LOCATION = 'days/MODIFY_LOCATION' as const;
const WRITING = 'days/WRITING' as const;

const POST_DAYS_PENDING = 'days/POST_DAYS_PENDING' as const;
const POST_DAYS_SUCCESS = 'days/POST_DAYS_SUCCESS' as const;
const POST_DAYS_FAILURE = 'days/POST_DAYS_FAILURE' as const;

// 액션 생성 함수
export const addDay = () => ({
  type: ADD_DAY,
});

export const deleteDay = (day: number) => ({
  type: DELETE_DAY,
  payload: { day },
});

export const inputDate = (day: number, date: string) => ({
  type: INPUT_DATE,
  payload: { day, date },
});

export const inputWeather = (day: number, data: string) => ({
  type: INPUT_WEATHER,
  payload: { day, data },
});

export const uploadImage = (day: number, file: File[]) => ({
  type: UPLOAD_IMAGE,
  payload: { day, file },
});

export const deleteImage = (day: number, index: number) => ({
  type: DELETE_IMAGE,
  payload: { day, index },
});

export const changeLocation = (day: number, type: string, data: string, index: number) => ({
  type: CHANGE_LOCATION,
  payload: { day, type, data, index },
});

export const modifyLocation = (day: number, type: string, index: number | null) => ({
  type: MODIFY_LOCATION,
  payload: { day, type, index },
});

export const writing = (day: number, type: string, data: string) => ({
  type: WRITING,
  payload: { day, type, data },
});

const postDaysPending = () => ({ type: POST_DAYS_PENDING });
const postDaysSuccess = (payload: AxiosResponse) => ({ type: POST_DAYS_SUCCESS, payload });
const postDaysFailure = (payload: AxiosError) => ({ type: POST_DAYS_FAILURE, error: true, payload });

type dayAction =
  | ReturnType<typeof addDay>
  | ReturnType<typeof deleteDay>
  | ReturnType<typeof inputDate>
  | ReturnType<typeof inputWeather>
  | ReturnType<typeof uploadImage>
  | ReturnType<typeof deleteImage>
  | ReturnType<typeof changeLocation>
  | ReturnType<typeof modifyLocation>
  | ReturnType<typeof writing>
  | ReturnType<typeof postDaysPending>
  | ReturnType<typeof postDaysSuccess>
  | ReturnType<typeof postDaysFailure>;

export type dayInfoType = {
  [index: string]: string;
  departure: string;
  arrival: string;
  travelTime: string;
  transportation: string;
};

export type DaysDataType = {
  [index: string]: string | File[] | number | dayInfoType[] | null | string[];
  date: string;
  // archiveId: number | null;
  dayNumber: number;
  travelDescription: string;
  emotionDescription: string;
  weather: string;
  tipDescription: string | null;
  dayInfoSaveRequestDtos: dayInfoType[];
  dayImages: File[];
  // writer: string | null;
};

export type DaysModuleType = {
  data: DaysDataType[];
  loading: boolean;
  error: null | Error;
};

// thunk 함수
export const postDay =
  (data: DaysDataType, id: number, num: number): ThunkAction<void, RootState, null, dayAction> =>
  async (dispatch) => {
    try {
      dispatch(postDaysPending());
      const formData = new FormData();
      formData.append(
        'daysSaveRequestDtos',
        new Blob([JSON.stringify({ daysSaveRequestDtos: data })], { type: 'application/json' }),
      );
      const response = await instance.post(`/api/v1/archives/${id}/days/${num}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch(postDaysSuccess(response));
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(postDaysFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: DaysModuleType = {
  data: [
    {
      dayNumber: 1,
      // writer: null,
      date: '',
      // archiveId: null,
      weather: '',
      travelDescription: '',
      emotionDescription: '',
      tipDescription: null,
      dayInfoSaveRequestDtos: [
        {
          departure: '',
          arrival: '',
          travelTime: '',
          transportation: '',
        },
      ],
      dayImages: [],
    },
  ],
  loading: false,
  error: null,
};

// 리듀서
// eslint-disable-next-line default-param-last
function days(state: DaysModuleType = initailState, action: dayAction) {
  switch (action.type) {
    case ADD_DAY:
      return {
        ...state,
        data: state.data.concat([
          {
            dayNumber: state.data.length + 1,
            // writer: null,
            date: '',
            // archiveId: null,
            weather: '',
            travelDescription: '',
            emotionDescription: '',
            tipDescription: null,
            dayInfoSaveRequestDtos: [
              {
                departure: '',
                arrival: '',
                travelTime: '',
                transportation: '',
              },
            ],
            dayImages: [],
          },
        ]),
      };
    case DELETE_DAY:
      return {
        ...state,
        data: state.data
          .filter((day) => day.dayNumber !== action.payload.day)
          .map((day) => {
            if (day.dayNumber > action.payload.day) return { ...day, dayNumber: action.payload.day - 1 };
            return day;
          }),
      };
    case INPUT_DATE:
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].date = action.payload.date;
        }),
      };
    case INPUT_WEATHER:
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].weather = action.payload.data;
        }),
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].dayImages.push(...action.payload.file);
        }),
      };
    case DELETE_IMAGE:
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].dayImages.slice(action.payload.index, 1);
        }),
      };
    case CHANGE_LOCATION:
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].dayInfoSaveRequestDtos[action.payload.index][action.payload.type] =
            action.payload.data;
        }),
      };
    case MODIFY_LOCATION:
      if (action.payload.type === 'add') {
        return {
          ...state,
          data: produce(state.data, (draft) => {
            draft[action.payload.day].dayInfoSaveRequestDtos.push({
              departure: '',
              arrival: '',
              travelTime: '',
              transportation: '',
            });
          }),
        };
      }
      return {
        ...state,
        data: produce(state.data, (draft) => {
          draft[action.payload.day].dayInfoSaveRequestDtos.splice(action.payload.index!, 1);
        }),
      };

    case WRITING:
      return {
        ...state,
        data: state.data.map((day) =>
          day.dayNumber === action.payload.day ? { ...day, [action.payload.type]: action.payload.data } : day,
        ),
      };
    case POST_DAYS_PENDING:
      return { ...state, loading: true };
    case POST_DAYS_SUCCESS:
      return { ...state, loading: false };
    case POST_DAYS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default days;
