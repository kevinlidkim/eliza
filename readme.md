set DEBUG=cookiebook:* & npm start

http://danielkummer.github.io/git-flow-cheatsheet/




How things work (don't touch anything else!)

=========================
===       ./app       ===
=========================
- this is where all the backend stuff is located

=========================
===  app/controllers  ===
=========================
- this is where we define the server side endpoint calls
- querying for data, creating new sequelize objects, etc

=========================
===     app/models    ===
=========================
- this is where we define the object schema of each sql table

=========================
===     app/routes    ===
=========================
- this is where we set up the endpoints and routes for our server
- by going to the [route url], we trigger [event]



=========================
===     ./config      ===
=========================
- this is where all the config files go

=========================
===    ./config/db    ===
=========================
- this is where we set up sequelize and connect to our db
- add your own database credentials in the config folder and name the file "secret.json"



=========================
===     ./public      ===
=========================
- this is where all the frontend stuff is

=========================
===   ./public/css    ===
=========================
- this is where all the css files are

=========================
===   ./public/img    ===
=========================
- this is where all the images are

=========================
===    ./public/js    ===
=========================
- this is where all the javascript files are



=========================
===   js/controllers  ===
=========================
- this is where all the controllers belong
- i dont really know how to explain what a controller is

=========================
===    js/services    ===
=========================
- this is where all the frontend functions are made
- we can give functions a return value to redirect them to a different page

=========================
===       js/app      ===
=========================
- this is where we inject angular into our application
- don't touch this unless you are adding new controllers/services to inject into the app

=========================
===     js/views      ===
=========================
- this is where the html is
- determines what html to display on what page and which controller to use

