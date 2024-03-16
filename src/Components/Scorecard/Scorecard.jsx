import React from "react";
import "/src/App.css";
import { Progress } from "@material-tailwind/react";
import CircularProgressBar from "../Circularprogress/Circularprogress";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


const Scorecard = (props) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulating a delay with setTimeout
      setTimeout(async () => {
        const response = await axios.get('');
        setData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      }, 2000); // Simulated delay of 2 seconds
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    let list = []
    let colour = "";
    let score = 0;
    
    for (key in props){
        if(props[key]<=30) list.push((        <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">{key} <div className=" mt-2 w-4/5 h-1/5"><Progress value={props[key]} color="red" size="lg" label></Progress> </div></div>));
        if(props[key]>30 && props[key]<=60) list.push(     (   <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">{key} <div className=" mt-2 w-4/5 h-1/5"><Progress value={props[key]} color="yellow" size="lg" label></Progress> </div></div>))        
        if(props[key] > 60 )list.push((   <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">{key} <div className=" mt-2 w-4/5 h-1/5"><Progress value={props[key]} color="red" size="lg" label></Progress> </div></div>))
    }
    

    return (
        <>
            {loading?(<div className = "text-3xl font-bold flex justify-center items-center h-screen w-screen"><CircularProgress size = {50}/></div>):(<div className="scorecard w-full h-fit flex justify-center items-center">
                <div className="card md:w-3/4 custom_scorecard border-green-500 border-2 border-solid rounded-lg shadow-xl m-4  bg-white flex flex-col justify-center items-center">
                    <div className="Title flex justify-center items-center text-5xl w-full h-1/5 font-bold bg-green-500 text-white">
                        Score Card
                    </div>
                    <div className="factors md:w-full h-2/5 flex justify-center items-center mt-2 ">
                        <div className="patient md:w-1/3 h-full flex flex-col justify-around items-center border-2 border-solid shadow-xl rounded-lg m-4 hover:shadow-2xl cursor-pointer">
                            <div className="heading w-fit h-fit text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50">
                                Patient Information
                            </div>
                            <div className="h-4/5 w-full flex flex-col justify-around items-start p-4 ">
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Zip Code: </span>1000084256 </span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Age: </span> 25 </span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Gender: </span>Male </span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Employment: </span>Employed </span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Health Insurance: </span> Yes</span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Housing: </span> Yes</span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Veteran: </span> Yes</span>
                                <span className="font-bold h-1/5 w-auto"><span className="text-xl font-bold text-green-500">Transportation: </span> Public</span>




                            </div>
                        </div>
                        <div className="socioeconomic w-1/3 h-full border-2 border-solid shadow-xl rounded-lg m-4 flex flex-col justify-center items-center hover:shadow-2xl cursor-pointer">
                            <div className="heading md:w-auto h-1/5 text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50 ">
                                Socio-Economic Analysis:
                            </div>

                            <div className="income md:w-full h-4/5 flex flex-col justify-center items-center p-2">
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">Income <div className=" mt-2 w-4/5 h-1/5"><Progress value={30} color={`${'green'}`} size="lg" label></Progress> </div></div>
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">Education <div className=" mt-2 w-4/5 h-1/5"><Progress value={30} color="green" size="lg" label></Progress> </div></div>
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-1/3 p-2">Employment <div className=" mt-2 w-4/5 h-1/5"><Progress value={30} color="green" size="lg" label></Progress> </div></div>

                            </div>

                        </div>
                        {/* <div className="w-1/5 h-full"> */}
                        <div className="demographics w-1/3 h-full border-2 border-solid shadow-xl rounded-lg m-4 flex flex-col justify-center items-center  p-2 hover:shadow-2xl cursor-pointer">
                            <div className="heading md:w-full h-1/2 text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50 ">
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-full p-2">Health Insurance <div className=" mt-2 w-4/5 h-1/5">
                                    <CircularProgressBar  
                                        size={100}
                                        progress={75}
                                        strokeWidth={15}
                                        circleOneStroke="#e5e7eb" // Tailwind gray-300
                                        circleTwoStroke="green"/> </div></div>
                            </div>

                            <div className="heading md:w-full h-1/2 text-black text-6xl font-bold text-center  flex justify-center items-center">
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-full p-2">Transportation <div className=" mt-2 w-4/5 h-1/5">
                                    <CircularProgressBar  
                                        size={100}
                                        progress={75}
                                        strokeWidth={15}
                                        circleOneStroke="#e5e7eb" // Tailwind gray-300
                                        circleTwoStroke="green"/>  </div></div>

                            </div>
                            {/* </div> */}

                        </div>
                    </div>



                    <div className="health w-full h-3/5 flex flex-col justify-center items-center border-2 border-solid shadow-xl rounded-lg m-8 hover:shadow-2xl cursor-pointer">
                        <div className="heading w-auto h-auto text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50 ">
                            Risk Analysis for various diseases
                        </div>

                        <div className="flex justify-center items-center h-4/5 w-full ">

                            <div className="first w-1/3 h-full flex justify-center items-center flex-col">
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Obesity <div className=" mt-2 w-4/5 h-1/4"><Progress value={30} color="green" size="lg" label ></Progress> </div></div>
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Stroke <div className=" mt-2 w-4/5 h-1/4"><Progress value={80} color="red" size="lg" label></Progress></div> </div>
                                <div className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Arthritis <div className=" mt-2 w-4/5 h-1/4"><Progress value={40} color="yellow" size="lg" label></Progress></div> </div>


                            </div>

                            <div className="second w-1/3 h-full flex justify-center items-center flex-col">
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Depression <div className=" mt-2 w-4/5 h-1/4"><Progress value={20} color="green" size="lg" label></Progress></div> </span>
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2"> Vision<div className=" mt-2 w-4/5 h-1/4"><Progress value={90} color="red" size="lg" label></Progress></div> </span>
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">COPD <div className=" mt-2 w-4/5 h-1/4"><Progress value={40} color="yellow" size="lg" label></Progress></div> </span>

                            </div>

                            <div className="third w-1/3 h-full flex justify-center items-center flex-col">
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">High Cholestrol <div className=" mt-2 w-4/5 h-1/4"><Progress value={50} color="yellow" size="lg" label></Progress></div> </span>
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Blood Pressure <div className=" mt-2 w-4/5 h-1/4"><Progress value={85} color="red" size="lg" label></Progress></div> </span>
                                <span className="flex flex-col justify-center items-center text-left text-lg font-bold w-full h-iv> p-2">Dental <div className=" mt-2 w-4/5 h-1/4"><Progress value={30} color="green" size="lg" label></Progress></div> </span>
                            </div>
                        </div>
                    </div>

                    <div className="overall w-full h-2/5 flex justify-center items-center ">
                        <div className="sdoh w-4/5 h-full flex flex-col justify-center items-center border-2 border-solid shadow-lg rounded-xl m-4 hover:shadow-xl cursor-pointer">
                            <div className="heading w-auto h-auto text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50">
                                SDOH
                            </div>

                            <div className = "w-full h-4/5 mt-4 p-2">
                            <CircularProgressBar  
                                        size={150}
                                        progress={75}
                                        strokeWidth={15}
                                        circleOneStroke="#e5e7eb" // Tailwind gray-300
                                        circleTwoStroke="green"/>

                            </div>
                        
                               

                        </div>

                        <div className="health w-4/5 h-full flex flex-col justify-center items-center border-2 border-solid shadow-lg rounded-xl m-4 hover:shadow-xl cursor-pointer">
                            <div className="heading  text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50">
                                Health
                            </div>

                            <div className = "w-full h-4/5 mt-4 p-2">

                            <CircularProgressBar  
                                        size={150}
                                        progress={75}
                                        strokeWidth={15}
                                        circleOneStroke="#e5e7eb" // Tailwind gray-300
                                        circleTwoStroke="green"/>
                               </div> 
                        </div>
                    </div>

                    <div className="suggestion grid grid-flow-row grid-cols-1 w-full p-4 h-auto border-2 border-solid shadow-lg hover:shadow-xl rounded-lg m-2 cursor-pointer">
                        <div className="heading w-auto h-auto text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50">
                            Suggestions
                        </div>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>

                    </div>

                    <div className="suggestion grid grid-flow-row grid-cols-1 w-full p-4 h-auto border-2 border-solid shadow-lg hover:shadow-xl rounded-lg m-2 cursor-pointer">
                        <div className="heading w-auto h-auto text-black text-2xl font-bold text-center border-b-2 border-b-black border-opacity-50">
                            Nearby Care Centres
                        </div>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>
                        <h1>1</h1>

                    </div>
                </div>
            </div>)}
        </>
    )
}

export default Scorecard;