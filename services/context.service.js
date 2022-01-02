"use strict";

const { Context } = require("imicros-flow-context");

module.exports = {
    name: "flow.context",
    mixins: [Context],
    
	/**
	 * Service settings
	 */
    settings: { 
        cassandra: {
            contactPoints: process.env.CASSANDRA_CONTACTPOINTS || "127.0.0.1", 
            datacenter: process.env.CASSANDRA_DATACENTER || "datacenter1", 
            keyspace: process.env.CASSANDRA_KEYSPACE_FLOW || "imicros_flow" ,
            contextTable: "context",
            instanceTable: "instance",
            tokenTable: "tokens"
        },
        services: {
            keys: "keys"
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