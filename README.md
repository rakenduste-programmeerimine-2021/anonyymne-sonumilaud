# Anonüümne sõnumilaud (Anonymous message board)

## Setup and run
npm install
npm start

## Authors
- Johan Valdemar Leoste
- Karl Aleksander Leoste

## Idea

ID kaardiga sisse logimine tagab turvalisuse ja seob kasutaja oma anonüümse profiiliga. Kasutajatel on võimalik jagada lühikesi mõttevälgatusi, mis sorteeritakse märgendsõnadega eraldi teemadesse. Neid sõnumeid saab teemade kaupa vaadata. Kasutajad võivad tekstidele lisada humoorikaid emotsioonipiltidel põhinevaid reaktsioone ning kui ajaraam seda featuuri lubab lisada, ka teistele vastata või teisi oma tekstides märkida.

## Wireframe

x

## Technologies
### Frontend
- Javascript
- React
### Backend
- Javascript
- Node.js

## Functionality

### App-specific terms:
- Hacker: a logged in user of the app
- Guest: a user of the app, who is not logged in
- Thought: a post made by an user, containing a text field and a Topic array field
- Topic: a simple text field, according to which Thoughts can be organised into categories
- Reaction: funny emojis that users can add to appear under Thoughts
### Everyone
- View topics
- View thoughts in topics
### Guests:
- Register
- Log in
### Hackers:
- Log out
- Post thoughts
- Edit own thoughts
- Delete own thoughts
- Add reactions to thoughts
- Remove own reactions from thoughts