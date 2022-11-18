ToolboxMobileTest_v2
# ToolboxMobileTest - React Native

Test Project to demostrate skills for and ToolBox company interview.

## Installation

1. Open Terminal
2. Clone a GitHub repository https://github.com/mcarlos137/ToolboxMobileTest_v2.git in a ToolboxMobileTest_v2 folder in your workspace environment.
3. Go into ToolboxMobileTest_v2 folder
4. Run command 'npm install' (node required)
5. For IOS run 'cd ios && pod install && cd ..' 
6. For Android create file android/local.properties pointing your Android SDK like this: sdk.dir = /Users/$user/Library/Android/sdk

## Run (React Native CLI required) 

IOS: 'react-native run-ios' (if you want to specify simulator name use 'react-native run-ios --simulator="iPhone 14"')
Android: 'react-native run-android' (open your simulator before run command) 

## Usage

Press Login button to go to carousels.
Navegate into carrousel Items and press image to deploy video player.
Inside video player press '<Back' button to return to carrousels. (when focus on carrousels screen a request data is performed to verify if token is expired, and if it is expired redirect to login screen)
Press Logout button to return to main screen.

## Used libraries

  react-native-paper -> for managing themes
  react-native-video -> handle videos
  REDUX -> react-redux redux redux-persist redux-thunk 
  MAVIGATION -> @react-navigation/native @react-navigation/stack
  @react-native-async-storage/async-storage -> strategy to use persistence with redux
  BASICS -> react react-native react-native-animatable react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens @react-native-community/masked-view
  
## Pending improvements

  Retrieve the same token if it is not expire to check in before login. App save token and if it is the same, login can be bypassed and redirected into carrousels automatically.
  Video lazy loading.
  Video players effects in android when goes back, players tool buttons remains.
  Unit testing components.
  Others...

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
