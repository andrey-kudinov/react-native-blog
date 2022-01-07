import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookmarkedScreen } from '../screens/BookmarkedScreen'
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
        backgroundColor: Platform === 'android' ? THEME.MAIN_COLOR : 'white'
      },
      headerTintColor: Platform === 'android' ? 'white' : THEME.MAIN_COLOR,
      headerTitleStyle: {
        fontFamily: 'roboto'
      }
    }
  }
)

const bookmarkedNavigator = createStackNavigator(
  {
    BookmarkedScreen: BookmarkedScreen,
    'Post 2': PostScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform === 'android' ? THEME.MAIN_COLOR : 'white'
      },
      headerTintColor: Platform === 'android' ? 'white' : THEME.MAIN_COLOR,
      headerTitleStyle: {
        fontFamily: 'roboto'
      }
    }
  }
)

const bottomNavigator = createBottomTabNavigator({
  Blog: {
    screen: BlogNavigator,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: info => (
        <Ionicons name='ios-albums' size={25} color={info.tintColor} />
      )
    }
  },
  Bookmarked: {
    screen: bookmarkedNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name='ios-star' size={25} color={info.tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR
  }
})

export const AppNavigation = createAppContainer(bottomNavigator)
