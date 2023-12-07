import React, { useState } from 'react';

const EditUserPage = () => {
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    phoneNo: '123-456-7890',
    profileImg: 'https://example.com/default-profile-image.jpg',
    address: '123 Main St, City, Country',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUserData({
      ...userData,
      profileImg: imageUrl,
    });
  };

  const handleSaveChanges = () => {
    // Implement save changes logic here
    console.log('User data saved:', userData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit User</h1>

      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={userData.phoneNo}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Profile Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {userData.profileImg && (
            <img
              src={userData.profileImg}
              alt="Profile"
              className="mt-2 rounded max-w-full h-auto"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Address:</label>
          <textarea
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditUserPage;
