"use strict";

const { Master } = require("imicros-keys");

module.exports = {
    name: "master",
    mixins: [Master],
                           
	/**
	 * Service settings
	 */
    settings: {
        cassandra: {
            contactPoints: process.env.CASSANDRA_CONTACTPOINTS || "127.0.0.1", 
            datacenter: process.env.CASSANDRA_DATACENTER || "datacenter1", 
            keyspace: process.env.CASSANDRA_KEYSPACE_KEYS || "imicros_keys" ,
            keyTable: "keys",
            hashTable: "hashes"
        },
        expirationDays: 20
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