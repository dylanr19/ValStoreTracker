import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {Entypo, FontAwesome, Ionicons, Octicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Oswald_400Regular,
  });

  if (!fontsLoaded && !fontError){
    return null;
  }

  return (
      <View style={styles.page}>

        <View style={styles.footer}>
          <Feather name="shopping-bag" size={24} top={10} color="yellow" />
          <MaterialIcons name="date-range" size={24} top={10} color="white" />
          <AntDesign name="search1" size={24} top={10} color="white" />
          <Octicons name="checklist" size={24} top={10} color="white" />
          <Feather name="settings" size={24} top={10} color="white" />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  page: {
    minHeight: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  header: {
    flex: 0.5,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: "2%",
    bottom: "10%",
  },
  headerFeaturedText: {
    fontFamily: "Oswald_400Regular",
    fontStyle: "normal",
    fontSize: 15,
    color: "white",
    alignSelf: "flex-start",
  },
  headerBundleText: {
    fontFamily: "Oswald_400Regular",
    fontStyle: "normal",
    fontSize: 17,
    color: "white",
    alignSelf: "flex-start",
  },
  headerVPImage: {
    height: "8%",
    width: "5%",
    alignSelf: "flex-end",
    top: "36.5%",
    right: "10%",
  },
  headerVPValue: {
    alignSelf: "flex-end",
    top: "28%",
    right: "1.5%",
    fontFamily: "Oswald_400Regular",
    fontStyle: "normal",
    fontSize: 15,
    color: "white",
  },
  headerImg: {
    width: "100%",
    height: "100%",
  },
  weapons: {
    flex: 1,
    flexDirection: "column",
  },
  weapon: {
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    backgroundColor: "#212121",
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: 15,
  },
  weaponImg: {
    resizeMode:'contain',
    width: "100%",
  },
  weaponInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "20%",
    left: "5%",
    bottom: "2%",
    // backgroundColor: "red",
  },
  weaponVPImg: {
    width: "5%",
    height: "100%",
  },
  weaponInfoText: {
    left: "25%",
    fontFamily: "Oswald_400Regular",
    fontStyle: "normal",
    fontSize: 11,
    color: "white",
  },
  footer: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: "5%",
    paddingRight: "5%",
    bottom: 0,
    backgroundColor: "#363636",
  },
  footerIcon: {
    width: "10%",
    height: "40%",
    marginTop: "3%",
    flexWrap: "nowrap",
  },
});