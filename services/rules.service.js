"use strict";

const { Rules } = require("imicros-rules");
const { MinioMixin } = require("imicros-minio");

module.exports = {
    name: "rules",
    mixins: [Rules, MinioMixin({ service: "minio" })],
    
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