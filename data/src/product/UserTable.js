import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch the users data from the API
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data.users))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div>
      <h2>User Details</h2>
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
            <th>password</th>
            <th>Birth Date</th>
            <th>image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair</th>
            <th>IP</th>
            <th>Address</th>
            <th>city</th>
            <th>state</th>
            <th>stateCode</th>
            <th>postalCode</th>
            <th>coordinates</th>
            <th>country</th>
            <th>MAC Address</th>
            <th>University</th>
            <th>Bank</th>
            <th>Company</th>
            <th>Department</th>
            <th>Title</th>
            <th>address</th>
            <th>coordinates</th>
            <th>country</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
            <th>crypto</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
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
              <td>
                {user.address.address}</td>
              <td>{user.address.city} </td>
              <td>{user.address.state}</td>
              <td> {user.address.stateCode} </td>
              <td>{user.address.postalCode} </td>
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
              <td>
                ({user.address.country})

              </td>
              <td>{user.macAddress}</td>
              <td>{user.university}</td>
              <td>
                Expiry: {user.bank.cardExpire}<br />
                Card Number: {user.bank.cardNumber}<br />
                Card Type: {user.bank.cardType}<br />
                Currency: {user.bank.currency}<br />
                IBAN: {user.bank.iban}
              </td>
              <td>
                {user.company.name}</td>
              <td> {user.company.department}</td>
              <td> {user.company.title}</td>
              <td>Address: {user.company.address.address}<br /> City:{user.company.address.city}<br /> State: {user.company.address.state} <br />
                stateCode:{user.company.address.stateCode}<br />
                postalCode: {user.company.address.postalCode}<br />

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
              <td>Coin: {user.crypto.coin}<br />
                Wallet: {user.crypto.wallet}<br />
                Network: {user.crypto.network}</td>

              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
