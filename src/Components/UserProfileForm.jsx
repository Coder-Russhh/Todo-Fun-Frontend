import React, { useState, useEffect } from "react";
import axios from "axios";
import {backendURL} from "../config/dev"


const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${backendURL}/userProfile`);
        const userProfileData = response.data;
        setFormData(userProfileData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to update the user profile
      const response = await axios.put(`${backendURL}/userProfile`, formData);
      console.log("User profile updated:", response.data);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfileForm;
