import React, { useState } from 'react';
import { client } from '../client';
import CsvDownloadButton from 'react-json-to-csv';
const Admin = () => {
  const [contacts, setContacts] = React.useState([]);
  const [subscribers, setSubscribers] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [currentTab, setCurrentTab] = useState('contacts');

  const getContacts = async () => {
    const data = await client.fetch(`*[_type == "contact"]`);
    setContacts(data.sort((a, b) => b._createdAt - a._createdAt));
  };

  const getSubscribers = async () => {
    const data = await client.fetch(`*[_type == "subscribeToMail"]`);
    setSubscribers(data.sort((a, b) => b._createdAt - a._createdAt));
  };

  const handleLogin = async () => {
    setLoading(true);
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      await getContacts();
      await getSubscribers();
    } else {
      alert('Wrong Password');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-4">
      <h1 className="text-2xl font-bold mb-2">Admin Panel</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full md:w-1/2">
        <input
          type="password"
          className="w-4/5 p-2 m-2 bg-input border-0  rounded-md md:w-full"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className=" p-2 m-2 bg-input border-0  rounded-md"
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
      {loading && <p>Loading...</p>}
      <div className="flex flex-wrap items-center justify-center w-full h-full md:w-full">
        <button
          className="p-2 m-2 bg-input border-0  rounded-md"
          onClick={() => setCurrentTab('contacts')}
        >
          Contacts
        </button>
        <button
          className="p-2 m-2 bg-input border-0  rounded-md"
          onClick={() => setCurrentTab('subscribers')}
        >
          Subscribers
        </button>
        <CsvDownloadButton
          data={currentTab === 'contacts' ? contacts : subscribers}
          filename="contacts.csv"
          className=" p-2 m-2 bg-input border-0  rounded-md "
        >
          Download CSV file for {currentTab}
        </CsvDownloadButton>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full md:w-full">
        <Table data={currentTab === 'contacts' ? contacts : subscribers} />
      </div>
    </div>
  );
};

const Table = ({ data }) => {
  const headers =
    data.length > 0
      ? Object.keys(data[0]).sort((a, b) => b.localeCompare(a))
      : [];
  return (
    <div className="shadow-md rounded-lg w-11/12 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header, i) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
              key={i}
            >
              {headers.map((header, j) => (
                <td className="px-6 py-4" key={j}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4" colSpan={headers.length}>
              {data.length} rows
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
