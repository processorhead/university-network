var FactoryGirl = require('factory_girl');

require('./users')(FactoryGirl);
require('./disciplines')(FactoryGirl);
require('./articles')(FactoryGirl);
require('./groups')(FactoryGirl);
require('./messages')(FactoryGirl);
require('./teachers')(FactoryGirl);
require('./taught_disciplines')(FactoryGirl);
require('./students')(FactoryGirl);

module.exports = FactoryGirl;
