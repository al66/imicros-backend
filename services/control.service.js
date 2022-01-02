"use strict";

const { Controller } = require("imicros-flow-control");
const { MinioMixin } = require("imicros-minio");

module.exports = {
    name: "flow.control",
    // TODO: options of MinioMixin should not be necessary
    //       service name now under settings...
    mixins: [Controller,MinioMixin({ service: "minio" })],
    
	/**
	 * Service settings
	 */
    settings: {
        services: {
            agents: "agents",
            minio: "minio"
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