import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';

export function useBottomSheet() {
  const sheetRef = useRef<BottomSheetModal>(null);

  const open = useCallback(() => {
    sheetRef.current?.present();
  }, []);

  const close = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return {sheetRef, open, close};
}
