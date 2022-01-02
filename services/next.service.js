"use strict";

const { Next } = require("imicros-flow");

module.exports = {
    name: "flow.next",
    mixins: [Next],
    
	/**
	 * Service settings
	 */
    settings: {
        services: {
            context: "flow.context",
            query: "flow.query",
            acl: "acl",
            agents: "agents"
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