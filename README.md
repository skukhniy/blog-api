# RESTful API Blog

### [Live Demo](http://18.234.147.248/)

#### 📝 Description
A MERN-stack blog app using a RESTful API. Deployed with AWS EC2. Actively updated with blog posts about projects I am working on.

#### 💡 Features
* RESTful API with ability to create posts, read posts, update posts, and delete posts. 
* Active database with MongoDB for user authentication and text/image storage for posts
* Seperate route pointing to an Admin-only content management system
* User Authentication to access the Admin CMS
* Image Upload to MongoDB using Multer
* Rich text editor using tiptap, allowing for more aesthetic posts.
* Full-stack app housed on a virtual Ubuntu machine using AWS EC2. 

#### 🛠️ Built with 
 * React
 * React Router
 * SCSS
 * MongoDB
 * Mongoose
 * Express
 * NodeJS
 * PassportJS
 * AWS EC2
 * [Multer](https://www.npmjs.com/package/multer)
 * [tiptap](https://tiptap.dev/)
 
 
## Getting started

After cloning the repo, run:

```elm
cd server
npm install
npm run devStart
```

The REST API is now running at `localhost:4000`.

```
cd client
npm install
npm run build
npm start
```

The client is now running at `localhost:3000`.
