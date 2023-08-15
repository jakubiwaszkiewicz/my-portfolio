'use strict';

/**
 * project-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-data.project-data');
