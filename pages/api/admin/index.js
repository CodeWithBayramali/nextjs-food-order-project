import cookie from "cookie";
import { StatusCodes } from "http-status-codes";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(StatusCodes.OK).json({ message: "Success" });
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Wrong Credentials" });
    }
  }

  if (method === "PUT") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", process.env.ADMIN_TOKEN, {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(StatusCodes.OK).json({ message: "Success" });
  }
};

export default handler;
