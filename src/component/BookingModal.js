import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const BookingModal = ({ bookProduct, setBookProduct }) => {
  const { title, category_title, resale_price } = bookProduct;
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) =>{
    event.preventDefault();
    setBookProduct(null);
  }
  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-1/4">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={()=>setBookProduct(null)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{category_title}</h3>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              name="title"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-2 input-sm"
              defaultValue={title}
              disabled
            />{" "}
            <br />
            <input
              name="price"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-2 input-sm"
              defaultValue={resale_price}
              disabled
            />{" "}
            <br />
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-2 input-sm"
              defaultValue={user?.displayName}
              disabled
            />{" "}
            <br />
            <input
              name="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full mt-2 input-sm"
              defaultValue={user?.email}
              disabled
            />{" "}
            <br />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full mt-2 input-sm"
            />{" "}
            <br />
            <input
              name="contact"
              type="text"
              placeholder="Contact Number"
              className="input input-bordered w-full mt-2 input-sm"
            />{" "}
            <br />
            <button type="submit" className="btn w-full btn-sm mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;