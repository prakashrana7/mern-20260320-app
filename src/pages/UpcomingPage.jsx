import React from "react";
import ReminderCard from "../components/ReminderCard";
import useReminderStore from "../store/reminderStore";
import { format } from "date-fns";

const UpcomingPage = () => {
  const { deleteReminder, getUpcomingReminders } = useReminderStore();
  const reminders = getUpcomingReminders();

  if (reminders.length == 0) {
    return <h3 className="text-center font-medium">No Reminders.</h3>;
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          id={reminder.id}
          title={reminder.title}
          description={reminder.description}
          date={format(reminder.datetime, "MMM dd, yyyy")}
          time={format(reminder.datetime, "hh:mm a")}
          status={reminder.status}
          isUpcoming={true}
          onDeleteReminder={() => {
            if (window.confirm("Are you sure?")) {
              deleteReminder(reminder.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default UpcomingPage;
