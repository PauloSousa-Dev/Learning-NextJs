"use client";
import MainHeader from "./main-header/main-header";
import Notification from "@/components/ui/notification/notification";
import NotificationContext from "@/store/notification-context";
import { useContext } from "react";

function Layout({ children }) {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}

export default Layout;
