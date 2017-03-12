import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

global.expect = expect;
global.app = app;
global.request = chai.request(app);