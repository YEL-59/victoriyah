import {
  useGetNotification,
  useDeleteNotification,
  useMarkNotificationAsRead,
} from "@/hook/my-featuredlist.hook";
import { Bell, Trash2 } from "lucide-react";
import { format, isToday, isYesterday } from "date-fns";

function Notification() {
  const { notification, isLoading } = useGetNotification();
  const deleteMutation = useDeleteNotification();
  const readMutation = useMarkNotificationAsRead();

  const allNotifications = notification?.data?.all || [];
  const todayNotifications = allNotifications.filter((n) =>
    isToday(new Date(n.created_at))
  );
  const yesterdayNotifications = allNotifications.filter((n) =>
    isYesterday(new Date(n.created_at))
  );

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleMarkAsRead = (id) => {
    readMutation.mutate(id);
  };

  const renderNotificationCard = (notif) => (
    <div
      key={notif.id}
      className={`flex justify-between flex-col items-start sm:flex-row gap-5 sm:items-center bg-white p-5 rounded-xl 
        ${notif.read_at ? "opacity-50" : ""}`}
    >
      <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
        <div className="p-2 bg-primary h-10 w-10 rounded-full">
          <Bell className="text-white" />
        </div>
        <div>
          <h1 className="text-[#315215] font-medium capitalize">
            {notif?.data?.type.replace(/_/g, " ") || "Notification"}
          </h1>
          <p className="text-sm text-gray-700">{notif?.data?.message}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
        <p className="text-[#757575] text-lg whitespace-nowrap">
          {format(new Date(notif.created_at), "p")}
        </p>
        <div className="flex items-center gap-2">
          {!notif.read_at && (
            <button
              className="text-xs text-blue-500 hover:underline"
              onClick={() => handleMarkAsRead(notif.id)}
            >
              Mark as read
            </button>
          )}
          <Trash2
            className="cursor-pointer text-red-500 hover:text-red-700"
            onClick={() => handleDelete(notif.id)}
          />
        </div>
      </div>
    </div>
  );

  const hasNoNotifications =
    !todayNotifications.length && !yesterdayNotifications.length;

  return (
    <>
      <h1 className="text-2xl leading-[132%] font-semibold tracking-[-0.48px] text-[#315215] mb-8">
        Notification
      </h1>

      {isLoading ? (
        <p>Loading notifications...</p>
      ) : hasNoNotifications ? (
        <p className="text-gray-500 text-lg mt-4">No notifications available</p>
      ) : (
        <>
          {todayNotifications.length > 0 && (
            <div>
              <h2 className="mb-6 text-lg font-semibold leading-[132%] tracking-[-0.36px]">
                Today
              </h2>
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                {todayNotifications.map(renderNotificationCard)}
              </div>
            </div>
          )}

          {yesterdayNotifications.length > 0 && (
            <div>
              <h2 className="mb-6 mt-8 text-lg font-semibold leading-[132%] tracking-[-0.36px]">
                Yesterday
              </h2>
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                {yesterdayNotifications.map(renderNotificationCard)}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Notification;
