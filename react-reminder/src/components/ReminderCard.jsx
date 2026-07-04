const ReminderCard = ({ isUpcoming = false }) => {
  return (
    <div className="shadow rounded-2xl p-6 max-w-2xl">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-2 gap-x-4">
        <h2 className="text-3xl font-medium">Reminder title</h2>
        <div className="flex gap-2">
          <button className="bg-blue-200 hover:bg-blue-100 py-1.5 px-2 rounded-md text-sm">
            ✏️
          </button>
          <button className="bg-red-200 hover:bg-red-100 py-1.5 px-2 rounded-md text-sm">
            🗑️
          </button>
        </div>
      </div>
      <div className="flex gap-2 text-orange-500 text-xs">
        <span>📆2026 May 27</span>
        <span>⏰11:00 AM</span>
      </div>
      <p className="mb-4 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint,
        amet minus deserunt accusantium quod harum nesciunt nulla? Harum soluta
        accusantium molestias pariatur nisi unde nemo itaque enim modi at?
      </p>
      {!isUpcoming && (
        <button className="bg-orange-500 rounded-lg px-4 py-1.5 text-white">
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default ReminderCard;
