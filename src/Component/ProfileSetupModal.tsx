import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import Button from "./button";

const profilePictures = [
  "https://th.bing.com/th?id=OIF.OAkCWEVqGCKctDtW%2bi9eyw&w=100&h=100&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th?id=OIF.%2bDHAuMf1eSumEEqThfl%2bMA&w=99&h=100&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File19.jpg",
  "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/03.png",
  "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File10.png",
];

const ProfileSetupModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [selectedPicture, setSelectedPicture] = useState(profilePictures[0]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePictureChange = (direction: "left" | "right") => {
    const currentIndex = profilePictures.indexOf(selectedPicture);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + profilePictures.length) % profilePictures.length
        : (currentIndex + 1) % profilePictures.length;
    setSelectedPicture(profilePictures[newIndex]);
  };

  const handleSave = async () => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: selectedPicture,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Set Up Your Profile</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Profile Picture</label>
          <div className="flex items-center">
            <button onClick={() => handlePictureChange("left")}>{"<"}</button>
            <img
              src={selectedPicture}
              alt="Profile"
              className="w-24 h-24 mx-4 rounded-full"
            />
            <button onClick={() => handlePictureChange("right")}>{">"}</button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant={"defult"} onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupModal;
