import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "reverb",
  key: "5bcus2pmxhiwlo28uzz3",
  wsHost: "reverb.softvencefsd.xyz",
  wsPort: 443,
  wssPort: 443,
  forceTLS: true,
  enabledTransports: ["ws", "wss"],
  authEndpoint: "https://admin.gogobarter.com/api/broadcasting/auth",
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

export default echo;

// REVERB_APP_ID=190521
// REVERB_APP_KEY=5bcus2pmxhiwlo28uzz3
// REVERB_APP_SECRET=1ao4pzayobvpkpydj65b
// REVERB_HOST="reverb.softvencefsd.xyz"
// REVERB_PORT=443
// REVERB_SERVER_PORT=8082
// REVERB_SCHEME=https
