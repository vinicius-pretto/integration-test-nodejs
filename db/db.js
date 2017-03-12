import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import { dbURL, dbOptions } from '../config';

let database = null;

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../models');
    let models = [];

    fs.readdirSync(dir).forEach((file) => {
        const modelDir = path.join(dir, file);
        const model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    return models;
}

export default () => {
    if (!database) {
        const sequelize = new Sequelize(dbURL, dbOptions);
        
        database = {
            sequelize: sequelize,
            models: loadModels(sequelize)
        };
        sequelize
            .sync()
            .done((database) => database);
    }
    return database;
}