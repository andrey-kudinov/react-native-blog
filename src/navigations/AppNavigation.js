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
    fontFamily: 'roboto-bold'
  }
}

const PostNavigator = createStackNavigator(
  {
    Blog: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'Blog',
    defaultNavigationOptions: navigatorOptions
  }
)

const BookmarkedNavigator = createStackNavigator(
  {
    BookmarkedScreen: BookmarkedScreen,
    'Post 2': PostScreen
  },
  {
    defaultNavigationOptions: navigatorOptions
  }
)

const bottomTabsConfig = {
  Posts: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: info => (
        <Ionicons name='ios-albums' size={25} color={info.tintColor} />
      )
    }
  },
  Bookmarked: {
    screen: BookmarkedNavigator,
    navigationOptions: {
      tabBarLabel: 'Bookmarks',
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

const CreateNavigator = createStackNavigator(
  {
    'Create Post': CreateScreen
  },
  {
    defaultNavigationOptions: navigatorOptions
  }
)

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: navigatorOptions
  }
)

const MainNavigator = createDrawerNavigator(
  {
    Blog: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Posts',
        drawerIcon: <Ionicons name='home' size={20} color={THEME.MAIN_COLOR} />
      }
    },
    About: {
      screen: AboutNavigator
    },
    'Create Post': CreateNavigator
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: 'roboto-bold'
      }
    }
  }
)

export const AppNavigation = createAppContainer(MainNavigator)
