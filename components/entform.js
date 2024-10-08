"use client";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const EntForm = ({ userId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    createdBy: userId, // initialize userId from the query parameter
    title: "",
    category: "",
    nopatner: "",
    patnername: "",
    patneremail: "",
    patnerqual: "",
    patnerphone: "",
    projectsummary: "",
    price: "",
    file: "",
    image: "",
  });

  const onEdit = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formHandler = async (e) => {
    e.preventDefault();

    console.log("the form data is", formData);
    try {
      const response = await fetch("/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      toast.success("idea uploaded successfully");
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };
  const resetForm =()=>
  {
    router.push('/entredashboard');
  }
  return (
    <div>
      <Toaster/>
      <form onSubmit={formHandler}>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="text-center text-gray-400">
          Your Success is our algorithm
        </div>
        <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-2">
          <div className="w-[100%]">
            <div className="font-bold text-green-800 ">
              Propose Your Idea Here....
            </div>
            <div className="title flex flex-col gap-2 ">
              <label htmlFor="title" className="font-bold text-lg">
                Title
              </label>
              <textarea
                name="title"
                rows="3"
                value={formData.title}
                onChange={onEdit}
                required
                className="border border-green-800 rounded-md resize-none font-extrabold p-2 focus:outline-none focus:ring focus:ring-green-950"
              />
            </div>
          </div>
          {/* category */}
          <label
            htmlFor="category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={onEdit}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose category</option>
            <option value="medical">Medical</option>
            <option value="Technology">Technology</option>
            <option value="agri">Agriculture</option>
            <option value="bus">Business</option>
          </select>
          {/* no of patner */}
          <div className="w-[100%]">
            <div className="nopatner flex flex-col gap-2 ">
              <label htmlFor="nopatner" className="font-bold text-lg">
                No of patner
              </label>
              <input
                type="number"
                name="nopatner"
                rows="3"
                value={formData.nopatner}
                onChange={onEdit}
                required
                className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
              />
            </div>
          </div>
          {/* {patner details} */}
          <div className="bg-gray-100 rounded-md shadow-md p-2">
            <div className="font-extrabold text-green-900">Patner Details</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
              <div className="namepatner flex flex-col gap-2 ">
                <label htmlFor="nampatner" className="font-bold text-lg">
                  Partner Name
                </label>
                <input
                  type="text"
                  name="patnername"
                  rows="3"
                  value={formData.patnername}
                  onChange={onEdit}
                  required
                  className="border border-green-800 rounded-md resize-none p-2 focus:outline-none focus:ring focus:ring-green-950"
                />
              </div>
              <div className="nopatner flex flex-col gap-2 col-span-2">
                <label htmlFor="nopatner" className="font-bold text-lg">
                  Partner Email
                </label>
                <input
                  type="text"
                  name="patneremail"
                  rows="3"
                  value={formData.patneremail}
                  onChange={onEdit}
                  required
                  className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
                />
              </div>
              <div className="namepatner flex flex-col gap-2 ">
                <label htmlFor="nampatner" className="font-bold text-lg">
                  Patner Qualification
                </label>
                <input
                  type="text"
                  name="patnerqual"
                  rows="3"
                  value={formData.patnerqual}
                  onChange={onEdit}
                  required
                  className="border border-green-800 rounded-md resize-none p-2 focus:outline-none focus:ring focus:ring-green-950"
                />
              </div>
              <div className="nopatner flex flex-col gap-2 col-span-2">
                <label htmlFor="nopatner" className="font-bold text-lg">
                  Patner Phone
                </label>
                <input
                  type="text"
                  name="patnerphone"
                  rows="3"
                  value={formData.patnerphone}
                  onChange={onEdit}
                  required
                  className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
                />
              </div>
            </div>
          </div>
          {/* project Summary */}
          <label htmlFor="projectsummary" className="font-bold text-lg">
            Project Summary
          </label>
          <textarea
            name="projectsummary"
            rows="5"
            value={formData.projectsummary}
            onChange={onEdit}
            required
            className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
          />
          {/* pricing */}
          <div className="flex flex-col">
            <label htmlFor="price" className="font-bold text-lg">
              Extimated Budget
            </label>
            <div className="flex flex-row">
              <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
                $
              </span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={onEdit}
                className="bg-grey-lighter text-grey-darker py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none "
              />
            </div>
          </div>
          {/* project image  */}
          {/* <div className="p-2 ">
            <label className="font-bold text-lg" htmlFor="file_input">
              Upload img
            </label>
            <input
              className="p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="img_input"
              name="img"
              value={formData.img}
              onChange={onEdit}
              type="file"
            />
          </div>
          files

          <div className="p-2 ">
            <label className="font-bold text-lg" htmlFor="file_input">
              Upload file
            </label>
            <input
              className="p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              name="file"
              value={formData.file}
              onChange={onEdit}
              type="file"
            />
          </div> */}
          {/* {button} */}
          <div className="flex justify-center">
            <button className="bg-green-800 hover:bg-green-900 rounded-md p-2 text-white font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    
    </div>
  );
};

export default EntForm;
