import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { notifyMessage } from "../../utils";
import styles from "./styles";
import moment from "moment";
import { WebService } from "../../services";
import { AuthContext } from "../../hooks";

console.disableYellowBox = true;

export default function NotaryItemScreen({ navigation, route }) {
  const { file, fileType } = route.params;
  const { state, authContext } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [notaryName, setNotaryName] = React.useState("");
  const [notaryDescription, setNotaryDescription] = React.useState("");
  const [notaryTextContent, setNotaryTextContent] = React.useState("");
  let fileName = "";
  try {
    if (file) {
      fileName = file.uri.split("/")[file.uri.split("/").length - 1];
    }
  } catch (err) {
    console.log(err);
  }

  const goBack = () => {
    navigation.goBack();
  };

  // send file data to server
  const sendFileData = async () => {
    setLoading(true);
    try {
      let res;
      if (fileType === "text") {
        res = await WebService.uploadTextToServer({
          name: notaryName,
          description: notaryDescription,
          type: fileType,
          phoneNumber: state.userMobileNumber,
          textContent: notaryTextContent,
          time: moment().format(),
        });
      } else {
        res = await WebService.uploadFileToServer(file, {
          name: notaryName,
          description: notaryDescription,
          type: fileType,
          phoneNumber: state.userMobileNumber,
          time: moment().format(),
        });
      }
      notifyMessage(res.message);
      authContext.fetchNotaryItem(state.userMobileNumber);
      setTimeout(async () => {
        navigation.navigate("Home");
      }, 2000);
    } catch (err) {
      notifyMessage(err.message);
    }
    setLoading(false);
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.toolbarContainer}>
        <TouchableWithoutFeedback onPress={goBack}>
          <FontAwesome5 name="arrow-left" size={20} color="black" />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>Notary Details</Text>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.notaryName}
        placeholder="Enter a name"
        autoFocus
        autoCorrect={false}
        onChangeText={(notaryName) => setNotaryName(notaryName)}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.notaryName}
        placeholder="Enter a description"
        autoCorrect={false}
        onChangeText={(notaryDescription) =>
          setNotaryDescription(notaryDescription)
        }
      />
      {fileType !== "text" ? (
        <>
          <Text style={styles.label}>File</Text>
          <View style={styles.fileContainer}>
            <MaterialIcons name="attach-file" size={24} color="black" />
            <Text style={styles.fileName}>{fileName}</Text>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.label}>Content</Text>
          <TextInput
            style={styles.notaryName}
            placeholder="Enter your content"
            autoCorrect={false}
            onChangeText={(notaryTextContent) =>
              setNotaryTextContent(notaryTextContent)
            }
          />
        </>
      )}
      <TouchableOpacity
        style={styles.sendVerificationButton}
        onPress={sendFileData}
      >
        {!loading ? (
          <Text style={styles.sendVerificationText}>Notarize</Text>
        ) : (
          <ActivityIndicator size="small" color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
}
