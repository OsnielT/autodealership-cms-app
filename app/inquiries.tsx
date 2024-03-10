import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FormControl, Input, InputField, VStack } from '@gluestack-ui/themed';

export default function Inquiries() {
  return (
    <View style={styles.container}>
      <VStack space='md'>
        <FormControl>
          <Input>
            <InputField placeholder='Vehicle Name' />
          </Input>
        </FormControl>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:12,
    flex:1,
  }
});
