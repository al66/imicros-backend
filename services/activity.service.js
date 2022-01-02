"use strict";

const { Activity } = require("imicros-flow");

module.exports = {
    name: "flow.activity",
    mixins: [Activity],
    
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