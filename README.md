# Insta Clone

## 인스타그램앱 클론 프로젝트
- React Native 사용

### 추후 TODO
- [ ] Login Token Reset
- [ ] Profile -> Logout 기능
- [ ] logo 바꾸기

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

## App Loading
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

## Authentication
- [x] 네비게이션을 사용해서 앱 로딩 후의 화면 Flow를 이어주기
- [x] 유저 Create / Login 작업
```bash
    #react native navigation
    npm install @react-navigation/native
    yarn add @react-navigation/stack
    expo install react-native-screens react-native-safe-area-context
    expo install react-native-gesture-handler
```
### Navigation Props
- Navigation은 Stack/Tabs/Drawer가 있습니다
- 참고 url [링크](https://reactnavigation.org/docs/stack-navigator/)
```javascript
    <Stack.Navigator>
        <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
```
- 각각 props로 네비게이션에 설정값을 적용할 수 있습니다 

### Dark mode
- 다크모드 설정 자동으로 파악 해 줍니다
- app.json에 설정값 넣어주어야합니다
```bash
    expo install react-native-appearance
```
```javascript
    const light = Appearance.getColorScheme() === "light";
    <ThemeProvider></ThemeProvider>
```

### Components
- 이곳에는 공통으로 사용 할 수 있는 공통 컴포넌트들을 만들었어요
- prop와 기타 여러 인자들을 사용해서 커스터마이징 할 수 있습니다
- 동일한 레이아웃으로 제작되기 때문에 통일성을 줄 수 있습니다

### React Hook Form
```bash
    npm install react-hook-form
    or
    yarn add react-hook-form
```
- react hook form은 웹, react native에서 둘다 사용 할 수 있습니다
- useForm()이라는 훅으로 원하는 내용들을 가져 올 수 있습니다
- react native에는 form이 없어 submit event를 사용 x -> react-hook-form을 사용하기


### Apollo Client & graphql
```bash
    yarn add @apollo/client graphql
```
- 개발할 때에는 localhost로 가능하지만, 실제로 핸드폰에서 사용 했을 경우에는 localhost서버가 더이상 존재하지 않습니다 
- 때문에 ngrok 혹은 local tunnel등을 사용하거나 apollo client를 사용해서 통신을 돕습니다

### Logged in Navigation
- tab navigation 사용을 위해 패키지 설치
```bash
    yarn add @react-navigation/bottom-tabs
```

### Login 유지
- 로그인 후에 어플리케이션을 재 시작 했을 경우 계속 로그인을 할 수 있도록 작업
- [링크주소](https://reactnative.directory/?search=storage)
```
    expo install @react-native-async-storage/async-storage
```
- tips -> npm과 expo의 차이는, 기준점이 node에 있느냐 expo에 있느냐의 차이입니다!


### Tab Navigator
- 기존의 개발 옵션들이 변경되었습니다 [링크](https://reactnavigation.org/docs/upgrading-from-5.x/)
```bash
    yarn add @react-navigation/bottom-tabs
```
