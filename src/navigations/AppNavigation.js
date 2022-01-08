import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { BookmarkedScreen } from '../screens/BookmarkedScreen'
import { THEME } from '../theme'

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform === 'android' ? THEME.MAIN_COLOR : 'white'
  },
  headerTintColor: Platform === 'android' ? 'white' : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontFamily: 'roboto'
  }
}

const BlogNavigator = createStackNavigator(
  {
    'My blog': MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'My blog',
    defaultNavigationOptions: navigatorOptions
  }
)

const bookmarkedNavigator = createStackNavigator(
  {
    BookmarkedScreen: BookmarkedScreen,
    'Post 2': PostScreen
  },
  {
    defaultNavigationOptions: navigatorOptions
  }
)

const bottomTabsConfig = {
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
}

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeColor: 'white',
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR
        },
        shifting: true
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      })

const MainNavigator = createDrawerNavigator({
  BlogTabs: {
    screen: BottomNavigator
  },
  About: {
    screen: AboutScreen
  },
  Create: CreateScreen
})

export const AppNavigation = createAppContainer(MainNavigator)
