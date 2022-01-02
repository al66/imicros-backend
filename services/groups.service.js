"use strict";

const { Groups } = require("imicros-groups");

module.exports = {
    name: "groups",
    mixins: [Groups],
    
	/**
	 * Service settings
	 */
    settings: {
        /* replaced by env ADMIN_GROUP_ID & ADMIN_GROUP_NAME & ADMIN_GROUP_MEMBER
        initial : [{
            name: "imciros administration",
            member: "admin@imicros.de",
            core: true
        }]
        */
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