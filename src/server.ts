import app from './app.ts';
import { Config } from './config/index.ts';
import { logger } from './config/logger.ts';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info(`server is running on port: ${PORT}`);
        });
    } catch (error) {
        logger.error({ error: error });
        process.exit(1);
    }
};

startServer();
