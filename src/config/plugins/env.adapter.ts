import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    // MONGO DB
    MONGO_URL: env.get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),

    // JWT
    JWT_SEED: env.get('JWT_SEED').required().asString(),

    // MAIL
    // EMAIL: env.get('EMAIL').required().asString(),
    // MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
    // MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
    // WEBSERVICE_URL: env.get('WEBSERVICE_URL').required().asString(),
}