# Insta Clone

## 인스타그램앱 클론 프로젝트
- React Native 사용

### Lint
```bash
    npm install eslint
    npx eslint --init
```
Lint를 사용해서 코드의 통일성을 지켜줍니다
```
    ✔ How would you like to use ESLint? · style
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · react
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · node✔ How would you like to define a style for your project? · guide
    ✔ Which style guide do you want to follow? · airbnb
    ✔ What format do you want your config file to be in? · JavaScript
```

### App Loading
- [x] 엑스포를 사용한 앱 로딩 화면 만들기
```bash
    expo install expo-asset
    expo install expo-app-loading
    expo install expo-font
    npm i @expo/vector-icons

```
아이콘 참고 링크 - [링크](https://icons.expo.fyi)
유저가 앱을 실행하고 실제로 컴포넌트들이 나왔을 떄, 대부분의 데이터들이 준비되어 있어야 합니다. 
미리 준비되는 작업들을 위해서 미리 로딩하는 시간을 갖는 앱 로딩 화면입니다.

### Authentication
- [x] 네비게이션을 사용해서 앱 로딩 후의 화면 Flow를 이어주기
- [x] 유저 Create / Login 작업
```bash
    #react native navigation
    npm install @react-navigation/native
    yarn add @react-navigation/stack
    expo install react-native-screens react-native-safe-area-context
    expo install react-native-gesture-handler
```
- Navigation은 Stack/Tabs/Drawer가 있습니다