import { useState } from 'react';

const ConnectWithUs = ({ heading = ' Email us to Place your order!' }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const emailCheck = new RegExp( // eslint-disable-next-line
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  );
  console.log(contact);

  const handleSubmit = () => {
    if (
      contact.name === '' ||
      contact.email === '' ||
      contact.phone === '' ||
      contact.message === ''
    ) {
      alert('Please fill all the fields');
    } else if (!emailCheck.test(contact.email)) {
      alert('Please enter a valid email');
    } else {
      alert('Your message has been sent');
      setContact({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:w-1/2 my-4">
      <h1 className="text-2xl font-bold mb-2">{heading}</h1>

      <div className="flex flex-col items-center justify-center w-full h-full md:w-full">
        <input
          type="text"
          className="w-4/5 p-2 m-2 bg-input border-0  rounded-md md:w-full"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="w-4/5 p-2 m-2 bg-input border-0  rounded-md md:w-full"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-4/5 p-2 m-2 bg-input border-0 rounded-md md:w-full"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />
        <textarea
          className="w-4/5 p-2 m-2 bg-input border-0 rounded-md md:w-full"
          type="text"
          rows={5}
          placeholder="Comments"
          name="message"
          onChange={handleChange}
        />
        <button
          className="w-4/5 p-2 border-0 md:w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConnectWithUs;
