'use strict';

/**
 * data-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-about.data-about');
