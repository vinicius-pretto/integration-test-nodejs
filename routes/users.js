import HttpStatus from 'http-status';

export default (app) => {
    const userModel = app.db.models.users;

    app.get('/users', (req, res, next) => {
        return userModel.findAll({})
            .then(users => res.json({ users }))
            .catch(next);
    });

    app.get('/users/:id', (req, res, next) => {
        return userModel.findOne({ where: { id: req.params.id } })
            .then(user => res.json(user))
            .catch(next);
    });

    app.post('/users', (req, res, next) => {
        return userModel.create(req.body)
            .then(response => res.json(response))
            .catch(next);
    });

    app.put('/users/:id', (req, res, next) => {
        return userModel.update(req.body, { where: { id: req.params.id} })
            .then(() => res.sendStatus(HttpStatus.NO_CONTENT))
            .catch(next);
    });

    app.delete('/users/:id', (req, res, next) => {
        return userModel.destroy({ where: { id: req.params.id } })
            .then(() => res.sendStatus(HttpStatus.NO_CONTENT))
            .catch(next);
    });
}
