import { getServerSocket } from "./src/server.ts";
import { getClientSocket } from "./src/client.ts";

const socket = getServerSocket(Deno)({
  port: 1994,
  hostname: "localhost",
  onListen: ({ hostname, port }) =>
    console.log(`hello http://localhost:${port}`),
  next: () => {
    return Response.json({ foo: "faa" }, { status: 200 });
  },
});

socket.on("connected", () => {
  console.log("server: connected");
});
const client = getClientSocket({
  url: "ws://localhost:1994",
  protocols: ["test"],
});
client.on("connected", () => {
  console.log("client: connected");
});
client.connect();
