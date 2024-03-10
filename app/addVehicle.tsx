import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Textarea, TextareaInput, FormControlHelper, FormControlHelperText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, VStack, HStack, Button, ButtonText } from '@gluestack-ui/themed';

export default function AddVehicle() {
  return (
    <View style={styles.container}>
      <VStack space='md'>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder='Vehicle Name' />
          </Input>
        </FormControl>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Description</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="write something about the vehicle" />
          </Textarea>
        </FormControl>
        <HStack>
          <FormControl>
            <Button action="primary" mr="$4">
              <ButtonText>Create</ButtonText>
            </Button>
          </FormControl>
          <FormControl>
            <Button variant="outline" action="secondary">
              <ButtonText>Cancel</ButtonText>
            </Button>
          </FormControl>
        </HStack>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  }
});
