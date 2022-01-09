"use strict";

const _ = require("lodash");
const ApiService = require("moleculer-web");
const { Gateway } = require("imicros-gateway");
// const { UnAuthorizedError } = ApiService.Errors;

module.exports = {
    name: "gateway",
    // mixins: [ApiService],
    // mixins: [Gateway, ApiService],
    mixins: [Gateway],

    /**
     * Service settings
     */
    settings: {
        path: "/api",
        services: {
            users: "user",
            agents: "agents"
        },
        routes: [
            {
                path: "/",

                bodyParsers: {
                    json: true
                },

                authorization: true
            },
            {
                path: "/master/init",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "master.init"
                }
            },
            {
                path: "/master/getToken",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "master.getToken"
                }
            },
            {
                path: "/master/verify",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "master.verify"
                }
            },
            {
                path: "/master/getSealed",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "master.getSealed"
                }
            },
            {
                path: "/master/unseal",

                bodyParsers: {
                    json: true
                },
                
                authorization: false ,
                
                aliases: {
                    "POST /": "master.unseal"
                }
            },
            {
                path: "/store/set",

                bodyParsers: {
                    json: true
                },
                
                authorization: true,

                aliases: {
                    "POST /": "store.set"
                }
            },
            {
                path: "/user/create",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.create"
                }
            },
            {
                path: "/user/login",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.login"
                }
            },
            {
                path: "/user/requestConfirmationMail",

                bodyParsers: {
                    json: true
                },
                
                authorization: true,

                aliases: {
                    "POST /": "user.requestConfirmationMail"
                }
            },
            {
                path: "/user/confirm",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.confirm"
                }
                
            },
            {
                path: "/user/requestPasswordResetMail",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.requestPasswordResetMail"
                }
            },
            {
                path: "/user/resetPassword",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.resetPassword"
                }
            },
            {
                path: "/user/requestDeletion",

                bodyParsers: {
                    json: true
                },
                
                authorization: true,

                aliases: {
                    "POST /": "user.requestDeletion"
                }
            },
            {
                path: "/user/delete",

                bodyParsers: {
                    json: true
                },
                
                authorization: false,

                aliases: {
                    "POST /": "user.delete"
                }
            },
            {
                path: "/user",

                bodyParsers: {
                    json: true
                },
                
                authorization: true,

                aliases: {
                    "GET /me": "user.me"
                }
            },
            {
                path: "/agents/login",
                authorization: false
            },
            {
                path: "/upload",

                bodyParsers: {
                    json: false
                },

                authorization: true,

                aliases: {
                    // File upload from HTML form
                    "POST /": "multipart:minio.putObject",

                    // File upload from AJAX or cURL
                    "PUT /": "stream:minio.putObject",

                    // File upload from HTML form and overwrite busboy config
                    "POST /multi": {
                        type: "multipart",
                        // Action level busboy config
                        busboyConfig: {
                            limits: {
                                files: 3
                            }
                        },
                        action: "minio.putObject"
                    }
                },

                //onBeforeCall(ctx, route, req, res) {
                onBeforeCall(ctx, route, req) {
                    this.logger.info("before meta set", { meta: ctx.meta });
                    _.set(ctx, "meta.filename",req.headers["x-imicros-filename"]);
                    _.set(ctx, "meta.mimetype",req.headers["x-imicros-mimetype"]);
                    this.logger.info("meta set", { meta: ctx.meta });
                },

                // https://github.com/mscdex/busboy#busboy-methods
                busboyConfig: {
                    limits: {
                        files: 1
                    },
                    onFilesLimit: () => {}
                }
            },
            {
                path: "/file",

                bodyParsers: {
                    json: false
                },

                authorization: true,

                aliases: {

                    "GET /:objectName*": "minio.getObject",
                  
                    "GET /": "minio.getObject",
                    
                    "GET /stat/:objectName": "minio.statObject",
                  
                    "GET /stat/": "minio.statObject",
                    
                    "DELETE /:objectName": "minio.removeObject",
                  
                    "DELETE /": "minio.removeObject"
                }
            }/*,
            {
                path: "/template",

                bodyParsers: {
                    json: true
                },

                authorization: true,

                aliases: {

                    "POST /:name*": "template.render"
					
                }
            }*/
        ]
                
    },

    /**
     * Service metadata
     */
    metadata: {},

    /**
     * Service methods
     */
    methods: {
        /**
         * Authorize the request
         *
         * @param {Context} ctx
         * @param {Object} route
         * @param {IncomingRequest} req
         * @returns {Promise}
         */
        /*
        authorize(ctx, route, req) {
            let token;
            if (req.headers.authorization) {
                let type = req.headers.authorization.split(" ")[0];
                if (type === "Token" || type === "Bearer")
                    token = req.headers.authorization.split(" ")[1];
            }

            return this.Promise.resolve(token)
                .then(token => {
                    if (token) {
                        // Verify JWT token
                        return ctx.call("user.resolveToken", { token })
                            .then(async (res) => {
                                this.logger.info("Response of resolveToken: ", JSON.stringify(res));
                                if (res.user) {
                                    this.logger.info("Authenticated via JWT: ", res.user.email);
                                    // Reduce user fields (it will be transferred to other nodes)
                                    ctx.meta.user = await _.pick(res.user, ["id", "email", "verified"]);
                                    this.logger.info("Content of ctx.meta.user: ", JSON.stringify(ctx.meta.user));
                                    ctx.meta.token = token;
                                    return res.user;
                                } else {
                                    return null;
                                }
                            })
                            .catch(err => {
                                // Ignored because we continue processing if user is not exist
                                return Promise.reject(err);
                            });
                    }
                })
                .then(user => {
                    if (req.$endpoint.action.auth == "required" && !user)
                        return this.Promise.reject(new UnAuthorizedError());
                    if (req.headers["x-imicros-xtoken"]) {
                        _.set(ctx,"meta.acl.accessToken",req.headers["x-imicros-xtoken"]);
                        this.logger.info("Request access token", { token: ctx.meta.acl.accessToken});
                    }
                });
        }
        */

    }
    
};