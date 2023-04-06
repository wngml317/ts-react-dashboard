import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";

// 타입스크립트에서 useDispatch와 useSelector를 사용할 때
// 매번 RootState와 AppDispatch를 불러와 타입을 지정하는 것이 불편

// useDispatch: 액션을 실행시켜야 한다.
// 슬라이스에서 action을 추출해낸 뒤 액션의 이름을 추가하면 된다.
export const useAppDispatch = () => useDispatch<AppDispatch>();
// useSelector: 리덕스 저장소에서 데이터를 추출할 수 있다.
// 등록한 데이터를 가져와서 사용함
// useSelector를 사용할 때마다 RootState와 반환값의 타입을 입력하는 것이 번거로움
// RootState 타입이 미리 입력된 훅을 만들어서 사용
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;