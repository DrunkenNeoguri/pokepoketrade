import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {PropsWithChildren, RefObject} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

interface Props extends PropsWithChildren {
  sheetRef: RefObject<BottomSheetModal | null>;
  close: () => void;
}

export function BottomSheet({children, sheetRef, close}: Props) {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <BottomSheetModal ref={sheetRef}>
          <BottomSheetView style={styles.contentContainer}>
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 300,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
