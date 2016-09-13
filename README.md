# todo-app

Simple todo app written with react-native and targeting the android platform.
There are 2 versions of the app, one built using Exponent,
the other one with react-native-cli.

Both apps are easy to test using an android emulator from <a href="https://www.genymotion.com/" target="_blank">Genymotion</a>.

## Exponent

Get Exponent from <a href="https://getexponent.com/" target="_blank">here</a>.

Open the ./todo-app/Exponent folder to load the project.
To start the app, click the Device/Open on android (ctrl + d) button
while running an emulated android device.

## FullAppTodo

Use react-native-cli to build and deploy your app.

### Usage

Install react-native-cli:
> npm install -g react-native-cli

Create a new project:
> react-native init SomeApp

Regarding this project, cd into the TodoAppFull dir.
Ensure you have an emulated device running, then:
> react-native run-android
