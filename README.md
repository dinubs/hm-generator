# HM Stack Project Generator
---

```
npm install -g hm-generator
```

Create a project using

```
hm new
```

It will prompt you for an App Name and an App Description. These will be set in globals.js in the project root directory. The project directory is the same as the App Name with spaces replaced as dashes.

```
cd your-app-name
```

```
// To start your project server and open your browser to http://localhost:3000
hm start

// This can also be done with 
hm launch

// and
hm serve
```

### Todo
---

- Add in generator for models
- Add in generator for controllers
- Add in generator for routes
- Add in generator for scaffold (models, controllers, routes all in one)
