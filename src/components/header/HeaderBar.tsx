import { Toolbar, Typography, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { JSX } from "react";
import { MetaDataType } from "./Header";
import { UserMenu } from "../user/ProfilePage";

export function HeaderBar({
  data,
}: {
  data: Pick<
    MetaDataType,
    "notifications" | "setIsSidebarOpen" | "setIsLogedIn"
  >;
}): JSX.Element {
  const { notifications, setIsSidebarOpen } = data;
  return (
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        LB
      </Typography>

      <IconButton color="inherit" onClick={() => setIsSidebarOpen(true)}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <UserMenu />
    </Toolbar>
  );
}
