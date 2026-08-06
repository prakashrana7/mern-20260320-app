import ContactTable from "./_components/Table";

const ContactManagementPage = () => {
  return (
    <section className="py-3">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Contact Messages</h2>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">
      <ContactTable />
      </div>
    </section>
  );
};

export default ContactManagementPage;