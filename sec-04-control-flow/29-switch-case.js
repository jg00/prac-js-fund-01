console.log("--switch case--");
let role = "moderator";

switch (role) {
  case "guest": {
    console.log("Guest");
    break;
  }
  case "moderator": {
    console.log("Moderator");
    break;
  }
  default: {
    console.log("Unknown");
  }
}
