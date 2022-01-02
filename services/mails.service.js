"use strict";

const { Mails } = require("imicros-mails");
const { MinioMixin, SecretsMixin } = require("imicros-minio");

module.exports = {
    name: "mails",
    mixins: [Mails, MinioMixin({ service: "minio" }), SecretsMixin({ service: "keys" })],
                           
	/**
	 * Service settings
	 */
    settings: {},
	
	/**
	 * Service dependencies
	 */
    dependencies: ["minio","keys"],

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