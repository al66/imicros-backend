"use strict";

const { Acl } = require("imicros-acl");

module.exports = {
    name: "acl",
    mixins: [Acl],
    
	/**
	 * Service settings
	 */
    settings: {},

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