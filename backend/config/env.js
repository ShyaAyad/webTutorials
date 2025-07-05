// configure environtmental variables;
import dotenv from "dotenv";

// configure;
dotenv.config({ path: ".env.development.local" });

// export;
export const { PORT, DB_CONNECTION_STRING, JWT_SECRET, JWT_EXPIRES_IN } = process.env;
