"use strict";

const { Template } = require("imicros-templates");
const { MinioMixin } = require("imicros-minio");

module.exports = {
    name: "template",
    mixins: [Template, MinioMixin({ service: "minio" })],
    
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