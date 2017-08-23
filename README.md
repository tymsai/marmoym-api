# Marmoym API
Marmoym API is a server side application that processes API requests of different types of Marmoym Clients. 

## How we build our world
If you have ever heard the term _ontology_? Marmoym is not a mere dictionary, rather an intricate web of various, and related in many cases, concepts. Discussions on how we structure the pile of information is ongoing and we are also open to your thoughts.

## Developement
Though the tastes differ by individual engineers, the basic guideline we put forward is to use at least two different node.js instances. One for repetitively restarting the application (server) everytime a change has happend in the files, and the other for constantly recompiling (TypeScript compiler) the source code.

Following command to restart the appilication.
```
npm start
```

For watch to compile,
```
npm run dev
```

You can use `npm` or `yarn`.

## Contributing
We are more than welcome to your participation and any type of contributing. There is a guideline, though, which should not intimidate any. Please refer to it before you decide to do something.

