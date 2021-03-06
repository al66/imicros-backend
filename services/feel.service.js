"use strict";

const { Feel } = require("imicros-feel");

module.exports = {
    name: "feel",
    mixins: [Feel],
    
	/**
	 * Service settings
	 */
    settings: {
		services: {
			store: "minio"
		}
    },

	/**
	 * Service created lifecycle event handler
	 */
    created() {},

	/**
	 * Service started lifecycle event handler
	 */
    started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
    stopped() {}
};