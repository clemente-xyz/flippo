import schema from "../../graphql";
import { decodeToken } from "../../services/auth";

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (token != null) {
      const user = await decodeToken(token);

      req.user = user;
    } else {
      req.user = null;
    }

    return next();
  } catch (error) {
    throw error;
  }
}

export default app => {
  app.use(auth);
  schema.applyMiddleware({ app });
};
