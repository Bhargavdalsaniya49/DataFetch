import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch the users data from the API
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.users);
        setFilteredUsers(data.users); // Initially display all users
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleSearch = () => {
    if (searchId.trim()) {
      const user = userData.filter((user) => user.id === parseInt(searchId));
      setFilteredUsers(user); // Filter users based on ID
    } else {
      setFilteredUsers(userData); // Show all users if no ID is entered
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by User ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results in a table */}
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>maidenName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair</th>
            <th>IP</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>StateCode</th>
            <th>Postal Code</th>
            <th>Coordinates</th>
            <th>Country</th>
            <th>MAC Address</th>
            <th>University</th>
            <th>Bank</th>
            <th>Company</th>
            <th>Department</th>
            <th>Title</th>
            <th>Company Address</th>
            <th>Company Coordinates</th>
            <th>Company Country</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
            <th>Crypto</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.maidenName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.birthDate}</td>
                <td><img src={user.image} alt="User" width="128" /></td>
                <td>{user.bloodGroup}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.eyeColor}</td>
                <td>{user.hair.color} - {user.hair.type}</td>
                <td>{user.ip}</td>
                <td>{user.address.address}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                <td>{user.address.stateCode}</td>
                <td>{user.address.postalCode}</td>
                <td>
                  {user.address.coordinates ? (
                    <>
                      Latitude: {user.address.coordinates.lat} <br />
                      Longitude: {user.address.coordinates.lng}
                    </>
                  ) : (
                    <span>Coordinates not available</span>
                  )}
                </td>
                <td>{user.address.country}</td>
                <td>{user.macAddress}</td>
                <td>{user.university}</td>
                <td>
                  Expiry: {user.bank.cardExpire}<br />
                  Card Number: {user.bank.cardNumber}<br />
                  Card Type: {user.bank.cardType}<br />
                  Currency: {user.bank.currency}<br />
                  IBAN: {user.bank.iban}
                </td>
                <td>{user.company.name}</td>
                <td>{user.company.department}</td>
                <td>{user.company.title}</td>
                <td>
                  Address: {user.company.address.address}<br />
                  City: {user.company.address.city}<br />
                  State: {user.company.address.state}<br />
                  StateCode: {user.company.address.stateCode}<br />
                  PostalCode: {user.company.address.postalCode}
                </td>
                <td>
                  {user.company.address.coordinates ? (
                    <>
                      Latitude: {user.company.address.coordinates.lat} <br />
                      Longitude: {user.company.address.coordinates.lng}
                    </>
                  ) : (
                    <span>Coordinates not available</span>
                  )}
                </td>
                <td>{user.company.address.country}</td>
                <td>{user.ein}</td>
                <td>{user.ssn}</td>
                <td>{user.userAgent}</td>
                <td>
                  Coin: {user.crypto.coin}<br />
                  Wallet: {user.crypto.wallet}<br />
                  Network: {user.crypto.network}
                </td>
                <td>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="34" style={{ textAlign: "center" }}>
                {searchId ? `No user found with ID ${searchId}` : "No users available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
