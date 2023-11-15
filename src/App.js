import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data"
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Card from "./Components/Card";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { toast } from 'react-toastify';


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);





  async function fetchData() {

    setLoading(true);
    try {

      let response = await fetch(apiUrl);
      let output = await response.json();

      //Output
      setCourses(output.data);
    }

    catch (error) {

      toast.error("Something went wrong");

    }
    setLoading(false);

  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <Navbar />

      <div >
        <Filter

          filterData={filterData} category={category} setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200p] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)}
        </div>

      </div>



    </div>)
};

export default App;

