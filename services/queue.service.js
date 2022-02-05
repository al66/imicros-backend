"use strict";

const { Queue } = require("imicros-queue");

module.exports = {
    name: "flow.queue",
    
	/**
	 * Service settings
	 */
    settings: { 
        cassandra: {
            contactPoints: process.env.CASSANDRA_CONTACTPOINTS || "127.0.0.1", 
            datacenter: process.env.CASSANDRA_DATACENTER || "datacenter1", 
            keyspace: process.env.CASSANDRA_KEYSPACE_QUEUE || "imicros_queue" ,
            queueTable: "queue"
        },
        services: {
            keys: "keys",
            activity: "flow.activity"
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