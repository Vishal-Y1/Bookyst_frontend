import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../../firebase";

import { addBook } from "../../api/booksApi";

const Addbook = () => {
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const [formData, setFormData] = useState({});

  const handleChange = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image) {
      try {
        setUploading(true);
        const storage = getStorage(app);
        const storageRef = ref(storage, "images/" + image.name);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        console.log(downloadURL);
        setImgUrl(downloadURL);
        setFormData({ ...formData, image: downloadURL });
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/api/books/add", bookData);
      const response = await addBook(formData);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center w-full bg-slate-900">
        <h1 className="text-3xl mb-10">Add New Book</h1>
        <form
          className="flex flex-col gap-5  w-1/2 p-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            id="title"
            className="p-3 outline-none min-h-12 capitalize"
            placeholder="Book Title"
            autoFocus
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            name="desc"
            id="desc"
            className="p-3 outline-none min-h-12 capitalize"
            placeholder="Book Descriptioin"
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />
          <input
            type="text"
            name="author"
            id="author"
            className="p-3 outline-none min-h-12 capitalize"
            placeholder="Author Name"
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />

          <input
            type="text"
            name="genre"
            id="genre"
            className="p-3 outline-none min-h-12 capitalize"
            placeholder="Genre"
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          />

          <input
            type="text"
            name="tags"
            id="tags"
            className="p-3 outline-none min-h-12 "
            placeholder="Tags"
            onChange={(e) =>
              setFormData({
                ...formData,
                tags: e.target.value.split(","),
              })
            }
          />

          <input
            type="text"
            name="category"
            id="category"
            className="p-3 outline-none min-h-12 capitalize"
            placeholder="Category"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
          <input
            type="text"
            name="price"
            id="price"
            className="p-3 outline-none min-h-12 "
            placeholder="Price"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            type="text"
            name="discount"
            id="discount"
            className="p-3 outline-none min-h-12 "
            placeholder="Discount"
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
          />
          <input
            type="number"
            name="stock"
            id="stock"
            className="p-3 outline-none min-h-12 "
            placeholder="Stocks"
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
          />

          <div className="checkbox flex items-center gap-2">
            <input
              type="checkbox"
              name="instock"
              id="instock"
              // value={inStock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.checked })
              }
              className="size-6 p-3 outline-none "
            />
            <label htmlFor="stock" className="text-lg font-semibold text-white">
              In Stock
            </label>
          </div>

          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            // onChange={(e) => setFile(e.target.files[0])}
            onChange={handleChange}
            className="text-white"
          />

          <button
            type="submit"
            className="bg-blue-400 px-5 py-2 rounded-md"
            disabled={uploading}
          >
            {uploading ? "Publishing" : "Publish"}
          </button>
        </form>
        {imgUrl && <img src={imgUrl} />}
      </div>
    </>
  );
};

export default Addbook;
