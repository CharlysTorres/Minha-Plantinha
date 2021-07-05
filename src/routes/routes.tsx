import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import AuthRoutes from './tabs.routes';

const navigation = createStackNavigator();

const AppRoutes: React.FC = () => (
    <navigation.Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        },
      }}
    >
      <navigation.Screen 
        name="Welcome"
        component={Welcome}
      />

      <navigation.Screen 
        name="UserIdentification"
        component={UserIdentification}
      />

      <navigation.Screen 
        name="Confirmation"
        component={Confirmation}
      />

      <navigation.Screen 
        name="PlantSelect"
        component={AuthRoutes}
      />

      <navigation.Screen 
        name="PlantSave"
        component={PlantSave}
      />

      <navigation.Screen 
        name="MyPlants"
        component={AuthRoutes}
      />
    </navigation.Navigator>
)

export default AppRoutes;