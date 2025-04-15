import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ScreenParams = {
  ['메인']: undefined;
  ['검색']: undefined;
  ['등록']: undefined;
  ['트레이드']: undefined;
  ['내 정보']: undefined;
};

export type Navigation = NativeStackNavigationProp<ScreenParams>;
