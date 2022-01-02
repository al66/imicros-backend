"use strict";

const { Users } = require("imicros-users");

module.exports = {
    name: "user",
    mixins: [Users],
                           
	/**
	 * Service settings
	 */
    settings: {
        verifiedUsers: ["admin@imicros.de"]
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