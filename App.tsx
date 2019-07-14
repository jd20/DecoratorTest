/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import { Text } from 'react-native';

import { testing } from './testing'

class Test {
  @testing prop: string = 'hello world'
}

const App = () => {
  const t = new Test()

  return (
    <Fragment>
      <Text>{t.prop}</Text>
    </Fragment>
  );
};

export default App;
