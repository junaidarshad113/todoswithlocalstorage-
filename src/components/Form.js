import React, { useState } from "react";
const Form = (props) => {
  return (
    <form
      className="container border border-blue  mt-5"
      onSubmit={props.handleSubmit}
    >
      <div className=" p-5">
        <input
          className="form-control "
          type="text"
          onChange={(e) => props.setTitle(e.target.value)}
          placeholder="Enter Title"
      
        />

        <input
          className="form-control mt-3"
          type="text"
          onChange={(e) =>props.setDescription(e.target.value)}
          placeholder=" Enter Description"
          aria-label="default input example"
        />
        <button type="submit" className="btn btn-warning w-100 mt-3 ">
          SAVE TODO
        </button>
     
        
      </div>
    </form>
    
    
  );
};
export default Form;
