import config from "config"

export const startEnvVar = () => {
    if (!config.get("jwtPrivateKey")) {
        throw new Error("FATAL ERROR: jwtPrivateKey is not defined")
    }
}
