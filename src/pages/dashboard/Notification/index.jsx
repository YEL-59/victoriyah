import { Bell, Trash2 } from "lucide-react";

function Notification() {
  return (
    <>
      <h1 className="text-2xl leading-[132%] font-semibold tracking-[-0.48px] text-[#315215] mb-8">
        Notification
      </h1>

      <div>
        <h2 className="mb-6 text-lg font-semibold leading-[132%] tracking-[-0.36px]">
          Today
        </h2>
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>

          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>

          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 mt-8 text-lg font-semibold leading-[132%] tracking-[-0.36px]">
          Yesterday
        </h2>
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>

          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>

          <div className="flex justify-between flex-col items-start sm:flex-row gap-5  sm:items-center bg-[#FFF] p-5 rounded-xl">
            <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
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
            <div className="flex gap-4 items-center justify-between sm:justify-start w-full sm:w-fit">
              <p className="text-[#757575] text-lg whitespace-nowrap">
                2 minutes ago
              </p>
              <Trash2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
