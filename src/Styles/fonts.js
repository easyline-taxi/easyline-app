import { AppLoading } from 'expo';
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold  } from '@expo-google-fonts/josefin-sans';


export default function Fonts({ fonts }) {

    let [fontsLoaded, error] = useFonts({
      JosefinSans_400Regular, 
      JosefinSans_600SemiBold,
    })
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    }