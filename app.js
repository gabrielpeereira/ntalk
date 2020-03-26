const express = require('express')
     ,load = require('express-load')
     ,app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.statis(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.unsubscribe.index);

load

app.listen(3000, () => console.log('Ntalk no ar'));