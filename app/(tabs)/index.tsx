import { StyleSheet } from 'react-native';
import { Text, Box } from "@gluestack-ui/themed"
import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import { Button, ButtonText } from '@gluestack-ui/themed';
import { ButtonIcon } from '@gluestack-ui/themed';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Box width="100%" justifyContent="center" alignItems="stretch" p="$3" gap={'$5'}>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={()=>router.push("/addVehicle")}
        >
          <ButtonText><FontAwesome6 solid name="square-plus" size={20} /> Add Vehicle</ButtonText>
        </Button>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={()=>router.push("/inventory")}
        >
          <ButtonText><FontAwesome6 name="warehouse" size={20} /> Inventory</ButtonText>
        </Button>
        <Button
          size="xl"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={()=>router.push("/inquiries")}
        >
          <ButtonText><FontAwesome6 name="envelope" solid  size={20} /> Inquiries</ButtonText>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
