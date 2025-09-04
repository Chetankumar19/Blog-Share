
import { createContext } from "react";
import ProfilePhoto from "../assets/proflie_photo.webp";

export const LoggedUserContext = createContext({
  loggedInUserName: "Hello mitra",
  defaultUserPhoto: ProfilePhoto,
});
