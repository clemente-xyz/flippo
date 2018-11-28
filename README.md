# Flippo Game :dog: :monkey: :tropical_fish:

Flippo is a game that generates an experience in which users not only interact with the console on which they play, but also with the physical world that surrounds them.

The game shows the users animals of all species, and challenges them to record them in a record time as close as possible. Through this dynamic, the player remains proactive and focused, being able to achieve goals without having to have a long journey in the game: the challenges are of short duration and they are rewarded with points for approving them.

Specifically, the game establishes a set of challenges for the user, which once accepted, are made one by one. Each challenge is to present an animal to the user, and propose to draw and present it through the smartphone camera before the end of the challenge time. The game analyzes the user's drawing and if it is correct with the proposed animal, it gives cumulative points (which serve to measure its performance), but urges the user to play again.

## Built With

- Serverside: Node.js, Express, GraphQL and MongoDB.
- Clientside: React Native and Apollo.

## Local deployment

### Prerequisites

- Node >v8.11.3
- Npm >5.10.0
- Expo
- Xcode (for IOS deployment)
- Android Studio or other Android emulator (for Android deployment)
- Git

### Cloning and running

First of all clone the repo in your local machine by running:

```
$ git clone https://github.com/ClementeSerrano/flippo.git
```

After you enter to the directory of the project (`$ cd flippo`), go to both the server (`$ cd server`) and the client (`$ cd app`) and install node dependencies by running:

```
$ npm install
```

Once all node dependencies are installed, run in parallel the client and the server:

For the server:

```
$ npm start
```

For the client (mobile app):

```
$ npm run ios
```

or

```
$ npm run android
```

(depending on which OS do you want to test the app).

TO BE CONTINUED...

## Authors

- [Clemente Serrano](https://github.com/ClementeSerrano)
