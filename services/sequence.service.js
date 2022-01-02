"use strict";

const { Sequence } = require("imicros-flow");

module.exports = {
    name: "flow.sequence",
    mixins: [Sequence],
    
	/**
	 * Service settings
	 */
    settings: {
        services: {
            context: "flow.context",
            query: "flow.query",
            acl: "acl",
            rules: "rules",
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