import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'

const BlogNavigator = createStackNavigator(
  {
    'My blog': MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'My blog',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform === 'android' ? THEME.MAIN_COLOR : 'white',
        
      },
      headerTintColor: Platform === 'android' ? 'white' : THEME.MAIN_COLOR,
      headerTitleStyle: {
        fontFamily: 'roboto'
      }
    }
  }
)

export const AppNavigation = createAppContainer(BlogNavigator)
