import React from "react";
import { View } from "react-native";
import { Dialog } from "@rneui/themed";
import QRCode from "react-native-qrcode-svg";

const ItemGenerateQRDialog = ({ isVisible, itemId, onCacnel }) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={onCacnel}>
      <Dialog.Title title={`Generated QR  - ${itemId}`} />
      <View style={{ alignItems: "center" }}>
        <QRCode value={itemId} size={150} />
      </View>
    </Dialog>
  );
};

export default ItemGenerateQRDialog;
