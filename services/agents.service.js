"use strict";

const { Agents } = require("imicros-agents");

module.exports = {
    name: "agents",
    mixins: [Agents],
    
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