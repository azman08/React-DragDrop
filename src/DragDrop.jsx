import { useState } from "react";
import { motion } from "framer-motion";

function DragDrop() {
  const [image, setImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please Drop a Valid Image File");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please Select a valid image file.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 p-8">
      <motion.div
        className="w-[500px] h-48 border-4 border-solid border-black rounded-xl shadow-2xl flex items-center justify-center bg-white transform hover:scale-105 hover:shadow-2xl transition duration-200"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        whileHover={{ scale: 1.08 }}
      >
        {image ? (
          <motion.img
            src={image}
            alt="Uploaded preview"
            className="w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        ) : (
          <p className="text-gray-600 font-semibold">
            Drag & Drop an image here or click to upload
          </p>
        )}
      </motion.div>
      <input
        type="file"
        accept="image/*"
        className="mt-5 text-center border-black cursor-pointer px-4 py-2 border-2 border-dashed rounded-lg bg-white hover:bg-gray-100 hover:border-gray-600 focus:outline-none transition duration-300"
        onChange={handleFileSelect}
      />
    </div>
  );
}

export default DragDrop;
