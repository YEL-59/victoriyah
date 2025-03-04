import { Bell } from "lucide-react";
function Notification() {
  return (
    <>
      <h1>Notification</h1>

      <div>
        <h2 className="mb-2">Today</h2>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl mt-5 mb-5">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2">Yesterday</h2>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl mt-5 mb-5">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-xl">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-primary h-10 w-10 rounded-full">
              <Bell />
            </div>
            <div>
              <h1 className="text-[#315215] font-medium">
                New Exchange Request
              </h1>
              <p>
                John Doe wants to exchange iPhone 12 Pro Max for your MacBook
                Pro.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>2 minutes ago</p>
            <Bell />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
