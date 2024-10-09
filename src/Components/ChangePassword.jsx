import React, { useState } from 'react';
import { Button, Input } from '../Components/index';
import { Container } from './index';

function ChangePassword({ onPasswordChange }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("New password and confirm password don't match.");
            return;
        }

        // Call the passed-in onPasswordChange function with the current and new passwords
        onPasswordChange(currentPassword, newPassword);
        setSuccess('Password changed successfully!');

        // Reset fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <Container className="bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Change Password</h2>
            <div className="w-full max-w-md space-y-4">
                <form onSubmit={handleChangePassword} className="space-y-4">
                    <Input
                        type="password"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Current Password"
                    />
                    <Input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm New Password"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <Button
                        label="Change Password"
                        type="submit"
                        className="bg-blue-500 text-white hover:bg-blue-400"
                    />
                </form>
            </div>
        </Container>
    );
}

export default ChangePassword;
