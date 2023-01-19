const express = require('express');
const { engine } = require('express-handlebars');

const db = [
    {
        slug: 'monmen',
        name: 'Minh Monmen',
        avatar: 'https://images.viblo.asia/avatar/835402e9-e961-44f4-9ec4-d8d64d71b26b.jpg',
    },
    {
        slug: 'hehe',
        name: 'Hehe',
        avatar: 'https://images.viblo.asia/11a38b08-a914-441c-8f5a-4f9fe4fe567e.png',
    },
];

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/:slug', (req, res) => {
    const profile = db.find((item) => item.slug === req.params.slug);
    if (!profile) {
        res.sendStatus(404);
        return;
    }
    res.render('profile', { layout: false, ...profile });
});

app.listen(3000);
