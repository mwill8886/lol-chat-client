# LOL Chat Client

## Description  

The frontend to a simple chatroom app in ReactJS that matches the provided figma design.  

It should give you a box to type chat messages into (with a send button), 
and show a log of past chat messages you've sent. 
It should allow you to choose a status using the dropdown.
There's no backend required in this, 
you'll just be using local state to pretend that there's 
a real backend that messages are submitted to. 
The only messages appearing in chat will be your own.
The nickname should just be hard-coded to a default.

- No API backend
- No persistent state is required
- Must be implemented as a ReactJS app

### Figma File
[Figma Design File](https://www.figma.com/file/Ly6kBxjqcJkFTRUkGKSmDT/Design-Challenge-(Copy)?node-id=175%3A2)


### Stretch Goals

- [ ] Draggable and resizable chat window
- [x] Animated loading bar
- [ ] Play AOL send sound when the message is sent - *cant find yet*
- [ ] Play notification sound when a message is received  - *cant find yet*
- [x] Adjust favicon to AOL
- [ ] Log in screen for users to enter session
- [ ] Node/Express backend with SocketIO for real chat functionality

---

## Development

This project was created using the following basic tools:   
- create-react-app
- styled-components


### Starting the project

In order to start the current iteration of the project open the terminal from the root directory of the project (contains the package.json) and run `npm run start` to start the project in dev mode which will open the project on `localhost:3000`.

### Building the project
In order to create the build files for the project open the terminal from the root directory of the project (contains the package.json) and run `npm run build` and it will output the production ready file into the `build` directory.