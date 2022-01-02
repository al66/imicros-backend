"use strict";

const { Instance } = require("imicros-flow-control");

module.exports = {
    name: "flow.instance",
    mixins: [Instance],
    
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