"use client";

import { deleteContact, getContacts, markAsRead } from "@/api/contact";
import Spinner from "@/components/Spinner";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaCog, FaEye, FaTrash, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchContacts = () => {
    setLoading(true);

    getContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to load contact messages.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3">S.N</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">
                <FaCog />
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-6">
                  No Contact Messages.
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  className="border-b hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {contact.name}
                  </td>

                  <td className="px-4 py-3">{contact.email}</td>

                  <td className="px-4 py-3">{contact.phone}</td>

                  <td className="px-4 py-3 max-w-xs truncate">
                    {contact.message}
                  </td>

                  <td className="px-4 py-3">
                    {contact.isRead ? (
                      <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                        Read
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-700">
                        New
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    {format(contact.createdAt, "dd MMM yyyy")}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-3">

                      <button
                        onClick={() => setSelectedMessage(contact)}
                      >
                        <FaEye className="text-blue-600 cursor-pointer" />
                      </button>

                      {!contact.isRead && (
                        <button
                          onClick={() => {
                            markAsRead(contact._id)
                              .then(() => {
                                toast.success("Marked as read.");
                                fetchContacts();
                              })
                              .catch(() =>
                                toast.error("Something went wrong.")
                              );
                          }}
                          title="Mark as Read"
                          aria-label="Mark message as read"
                        >
                          <FaEnvelope className="text-green-600 cursor-pointer" />
                        </button>
                      )}

                      <button
                        onClick={() => {
                          if (!confirm("Delete this message?")) return;

                          deleteContact(contact._id)
                            .then(() => {
                              toast.success(
                                "Message deleted successfully."
                              );
                              fetchContacts();
                            })
                            .catch(() =>
                              toast.error("Delete failed.")
                            );
                        }}
                      >
                        <FaTrash className="text-red-600 cursor-pointer" />
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xl">

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">
                Contact Message
              </h2>

              <button
                onClick={() => setSelectedMessage(null)}
                className="text-xl px-2 bg-red-600 text-white rounded-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">

              <p>
                <strong>Name:</strong> {selectedMessage.name}
              </p>

              <p>
                <strong>Email:</strong> {selectedMessage.email}
              </p>

              <p>
                <strong>Phone:</strong> {selectedMessage.phone}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {format(
                  selectedMessage.createdAt,
                  "dd MMM yyyy hh:mm a"
                )}
              </p>

              <div>
                <strong>Message:</strong>

                <div className="mt-2 p-3 rounded bg-gray-100 dark:bg-gray-800 whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default ContactTable;