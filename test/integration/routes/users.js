import { defaultUser, newUser, updatedUser } from '../../fixtures/users.json';

describe('Routes: users', () => {
    const userModel = app.db.models.users;
    
    beforeEach(() => {
        return userModel
            .destroy({where: {}})
            .then(() => userModel.create(defaultUser));
    });

    describe('GET /users', () => {
        it('should return a list of users', () => {
            return request
                .get('/users')
                .then(response => {
                    const { name } = response.body.users[0];
                    expect(name).to.be.eql('Vinicius');
                });
        });
    });

    describe('GET /users/:id', () => {
        it('should return an user', () => {
            return request
                .get('/users/1')
                .then(response => {
                    const { name } = response.body;
                    expect(name).to.be.eql('Vinicius');
                });
        });
    });

    describe('POST /users', () => {
        it('should create an user', () => {
            return request
                .post('/users')
                .send(newUser)
                .then(response => {
                    const { name } = response.body;
                    expect(name).to.be.eql('Daniela');
                });
        });
    });

    describe('PUT /users/:id', () => {
        it('should update an existing user', () => {
            return request
                .put('/users/1')
                .send(updatedUser)
                .then(({ statusCode }) => expect(statusCode).to.be.eql(204));
        });
    });

    describe('DELETE /users/:id', () => {
        it('should delete an user', () => {
            return request
                .delete('/users/1')
                .then(({ statusCode }) => expect(statusCode).to.be.eql(204));
        });
    });
});