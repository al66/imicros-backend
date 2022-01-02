"use strict";

const { Minio } = require("imicros-minio");
const { AclMixin } = require("imicros-acl");

module.exports = {
    name: "minio",
    mixins: [Minio,AclMixin],
                           
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