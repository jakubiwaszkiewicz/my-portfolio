'use strict';

/**
 * about-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-data.about-data');
