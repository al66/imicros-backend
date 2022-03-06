"use strict";

const { JsonMap } = require("imicros-flow-map");
const { MinioMixin } = require("imicros-minio");

module.exports = {
    name: "jsonMap",
    mixins: [JsonMap, MinioMixin({ service: "minio" })],
    
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