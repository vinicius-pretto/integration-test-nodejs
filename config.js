let config = {};

config.port = process.env.PORT || 3000;
config.dbURL = process.env.DB_URL || 'postgres://root:toor@localhost:5432/postgres-test';
config.dbOptions = {
    dialect: process.env.DB_DIALECT || 'postgres',
    define: {
        timestamps: false,
        underscored: true
    }
}

if (process.env.NODE_ENV === 'test') {
    config.dbURL = 'sqlite://db.sqlite';
    config.dbOptions.dialect = 'sqlite';
}

module.exports = config;