import React, { useState } from 'react';
import { Button, Input, Container, NotLoggedIn, ChangePassword } from '../Components/index';
import { useSelector } from 'react-redux';
import axios from 'axios'; 

function UserProfile() {
    const user = useSelector((state) => state.userAuth);
    const [isEditing, setIsEditing] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: '/default-profile.png', 
    });
    const [profilePicture, setProfilePicture] = useState(userData.profilePicture);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [uploading, setUploading] = useState(false); // State for showing loading during upload

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
        setMessage({ text: '', type: '' }); // Clear previous messages
    };

    const handleSave = () => {
        if (userData.name && userData.email) {
            console.log('User data saved:', userData);
            setMessage({ text: 'User data saved successfully!', type: 'success' });
            setIsEditing(false);
        } else {
            setMessage({ text: 'Please fill in all fields.', type: 'error' });
        }
    };

    const handlePasswordChange = (currentPassword, newPassword) => {
        if (newPassword.length < 6) {
            setMessage({ text: 'New password must be at least 6 characters long.', type: 'error' });
        } else {
            console.log('Current Password:', currentPassword);
            console.log('New Password:', newPassword);
            setMessage({ text: 'Password changed successfully!', type: 'success' });
        }
    };

    const handleProfilePictureChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            setMessage({ text: '', type: '' });

            const formData = new FormData();
            formData.append('profilePicture', file); // 'profilePicture' should match your backend multer setup

            try {
                // Assuming your backend API endpoint is '/api/upload/profile-picture'
                const response = await axios.post('/api/upload/profile-picture', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const imageUrl = response.data.url; // Assuming the Cloudinary URL is returned in `url`
                setProfilePicture(imageUrl); // Update state with the new image URL
                setUserData((prevData) => ({
                    ...prevData,
                    profilePicture: imageUrl,
                }));
                setMessage({ text: 'Profile picture updated successfully!', type: 'success' });
            } catch (error) {
                setMessage({ text: 'Error uploading profile picture. Please try again.', type: 'error' });
            } finally {
                setUploading(false); // Stop the loader
            }
        }
    };

    return user ? (
        <Container className="bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <div className="w-full max-w-md space-y-4">
                
                {/* Display Profile Picture */}
                <div className="flex flex-col items-center">
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="border-4 border-black w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <Button
                        label="Change Profile Picture"
                        className="bg-gray-500 text-white hover:bg-gray-400"
                        onClick={() => document.getElementById('profile-picture-input').click()}
                    />
                    {/* Hidden file input */}
                    <Input
                        id="profile-picture-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleProfilePictureChange}
                    />

                    {/* Show loading state */}
                    {uploading && <p className="text-white mt-2">Uploading...</p>}
                </div>

                <Input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mb-2"
                    disabled={!isEditing}
                />
                <Input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mb-2"
                    disabled={!isEditing}
                />
                <div className="flex space-x-4">
                    {isEditing ? (
                        <>
                            <Button
                                label="Save"
                                onClick={handleSave}
                                className="bg-green-500 text-white hover:bg-green-400"
                            />
                            <Button
                                label="Cancel"
                                onClick={() => setIsEditing(false)}
                                className="bg-red-500 text-white hover:bg-red-400"
                            />
                        </>
                    ) : (
                        <Button
                            label="Edit"
                            onClick={handleEdit}
                            className="bg-blue-500 text-white hover:bg-blue-400"
                        />
                    )}
                </div>
            </div>

            {/* Display message */}
            {message.text && (
                <div className={`mt-4 text-center ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {message.text}
                </div>
            )}

            {/* Button to toggle ChangePassword visibility */}
            <Button
                label={showChangePassword ? "Hide Change Password" : "Change Password"}
                onClick={() => setShowChangePassword(prev => !prev)}
                className="mt-4 bg-blue-500 text-white hover:bg-blue-400"
            />

            {/* Conditionally render the Change Password component */}
            {showChangePassword && <ChangePassword onPasswordChange={handlePasswordChange} />}
        </Container>
    ) : (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <NotLoggedIn />
        </Container>
    );
}

export default UserProfile;
