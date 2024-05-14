import React, { useCallback, useState } from "react";
import Modal from "react-native-modal";
import { Linking } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";
import { fonts } from "@/style";
import { Pressable } from "./Pressable";

export const ForceUpdateFullScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isForceUpdate, setIsForceUpdate] = useState(false);

  // useMemo(() => {
  //   authFactory.forceUpdate().then(() => {
  //     setModalVisible(accountStore.forceUpdate.isUpdateRequired());
  //     setIsForceUpdate(accountStore?.forceUpdate?.isForceUpdate());
  //   });
  // }, []);

  const handleOnNotNow = useCallback(() => {
    if (!isForceUpdate) {
      setModalVisible(false);
    }
  }, [isForceUpdate]);

  const onUpdate = () => {
    try {
      Linking.openURL('');
    } catch (e) {
      // showErrorMessage(e?.toString());
    }
  };

  console.log('isForceUpdate ==>>', isForceUpdate);

  return (
    <Modal
      isVisible={isModalVisible}
      onModalHide={() => handleOnNotNow}
      onBackButtonPress={handleOnNotNow}
      animationInTiming={500}
      animationOutTiming={700}
      backdropTransitionOutTiming={0}
      animationIn="slideInUp"
      style={{margin: 0}}>
      <Box
        backgroundColor="gray1"
        alignItems="center"
        borderRadius={9}
        flex={1}
        justifyContent="center"
        paddingVertical="sr">
        {/*<Image*/}
        {/*  source={Images.app_icon}*/}
        {/*  height={DeviceHelper.calculateHeightRatio(120)}*/}
        {/*  width={DeviceHelper.calculateWidthRatio(120)}*/}
        {/*/>*/}
        <Text
          color="white"
          fontSize={14}
          fontFamily={fonts.roboto_bold}
          textAlign="center"
          paddingHorizontal="sr">
          {'force_update_message'}
        </Text>

        <Pressable
          onPress={onUpdate}
          marginEnd="s"
          paddingVertical="es"
          backgroundColor="primary"
          borderRadius={5}
          width="60%"
          marginTop="r"
          alignItems="center"
          justifyContent="center">
          <Text
            color="black"
            fontFamily={fonts.roboto_medium}
            fontSize={18}
            textAlign="center">
            {'install_new_version'}
          </Text>
        </Pressable>
        {!isForceUpdate && (
          <Pressable
            marginTop="r"
            paddingVertical="ss"
            onPress={handleOnNotNow}>
            <Text fontSize={16} color="white" fontFamily={fonts.roboto_medium}>
              {'not_now'}
            </Text>
          </Pressable>
        )}
      </Box>
    </Modal>
  );
};
