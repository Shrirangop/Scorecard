import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Survey_form = ()=>{

    let zipcode = useRef();
    let address = useRef()
    let age = useRef()
    let gender = useRef()
    let  Race = useRef()
    let Language = useRef()
    let Income = useRef()
    let Education = useRef()
    let VeteranYes= useRef()
    // let  VeteranNo =useRef()
    let Insurance = useRef()
    let Employment = useRef()
    let Stress = useRef()
    let Housing = useRef()
    let Transport = useRef()

    const Navigate = useNavigate();

    function isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    
    // Example usage
    const obj = {};
    console.log(isEmpty(obj));  // Output: true
    
    const obj2 = { key: 'value' };
    console.log(isEmpty(obj2));  // Output: false
  
    

    const handlesurvey = (e)=>{
        e.preventDefault();
        const data = {
            "zipcode": zipcode.current.value,
            "address": address.current.value,
            "age": age.current.value,
            "gender": gender.current.value,
            "race": Race.current.value,
            "Language": Language.current.value,
            "Income":Income.current.value,
            "Education":Education.current.value,
            "Insurance":Insurance.current.value,
            "Employment":Employment.current.value,
            "Stress":Stress.current.value,
            "Housing":Housing.current.value,
            "Transport":Transport.current.value,
            "Veteran":true && VeteranYes.current.checked,

        }

        // Make a POST request using Axios
        axios.post('', data)
        .then((response) => {
        console.log('Form submitted successfully!', response.data);
        if(response.data!={})Navigate("/scorecard");
        // Handle response or perform any actions after successful submission
        })
        .catch(error => {
        console.error('Error submitting form:', error);
        alert("error")
        // Handle error or display error message to the user
        });

        console.log(data);
        //clear  form after submission
        zipcode = 0;
        address = "";
        age  = 0;
        gender = "";
        Race = "";
        Language = "";
        Income = 0;
        Education = "";
        Insurance = "";
        Employment = "";
        Stress = "";
        Housing = "";
        Transport = "";
        VeteranYes = false;
        

        

        

    }



    return(
        <div className="w-full h-auto flex justify-center items-center">
            <div className="card md:w-1/2 h-auto flex flex-col justify-center items-center border-solid border-green-500 border-2 shadow-2xl rounded-lg m-4 bg-white">
                <div className="title text-green-500 text-5xl h-auto w-full text-center p-4 border-b-2 border-b-solid border-b-green-500 font-bold">
                    Survey Form
                </div>
                <form className=" grid grid-flow-row grid-cols-1  h-auto w-full items-center " method="post" action="/" onSubmit={handlesurvey}>
                    <div className="zipcode w-full h-auto flex flex-col justify-center items-start p-4  ">
                        <span className="Zip_Code text-xl font-bold p-2 ">ZIP Code:</span>
                        <input type="number" name="zipcode" id="zipcode" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "Enter zipcode" ref = {zipcode}/>   

                    </div>

                    <div className="address w-full h-auto flex flex-col justify-center items-start p-4  ">
                        <span className="address text-xl font-bold p-2 ">Address:</span>
                        <input type="text" name="address" id="address" className = "w-full h-auto border-2 rounded- border-green-500 border-solid border-opacity-70 rounded-lg" placeholder = "Enter your address"ref = {address}/> 
                    </div>

                    <div className="age w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="age text-xl font-bold p-2 ">Age:</span>
                        <input type="number" name="age" id="age" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "Enter yout age"ref = {age}/>   
                    </div>

                    <div className="gender w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="gender text-xl font-bold p-2 ">Gender:</span>
                        <select type="text" name="gender" id="gender" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {gender}>
                        <option value="">Select...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option>Pefer Not to say</option>               
                        </select>  
                    </div>

                    <div className="race w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="race text-xl font-bold p-2 ">Race:</span>
                        <select type="text" name="race" id="race" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Race}>
                        <option value = "">Select</option>
                        <option value = "WHITE">White</option>
                        <option value = "BLACK">Black</option>
                        <option value = "ASIAN">Asian</option>
                        <option value = "HISPANIC">Hispanic</option>
                 
                        <option value = "NHPI">Native Hawaiiann or Pacific Islander</option>
                      
                        <option value = "AIAN">American Indian or Alaskan Native</option>
                     
                        </select>   
                    </div>

                    <div className="language w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="language text-xl font-bold p-2 ">Comfortable Language:</span>
                        <input type="text" name="language" id="language" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "Enter your language" ref = {Language}/>   
                    </div>

                    <div className="income w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="income text-xl font-bold p-2 ">Income(in USD):</span>
                        <input type="number" name="income" id="income" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "Enter your income"ref = {Income}/>   
                    </div>

                    <div className="education w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="Education text-xl font-bold p-2 ">Education:</span>
                        <select type="text" name="Education" id="Education" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Education}>
                        <option value = "">Select</option>
                        <option value = "college">Some College Degree</option>
                        <option value = "high school">High School Diploma</option>
                        <option value = "school">Less than High School </option>
                        <option>Pefer Not to say</option>               
                        </select>   
                    </div>

                    <div className="veteran w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="veteran text-xl font-bold p-2 ">Veteran:</span>
                       <div className = "flex justify-start items-center"> 
                        <span className = "p-2"><input type="radio" name="veteran" id="veteran" className = "p-2" placeholder = "" ref = {VeteranYes}></input> Yes <br /></span>
                        <span className = "p-2"><input type="radio" name="veteran" id="veteran" className = "p-2" placeholder = "" ></input> No  </span>
                        </div> 
                    </div>

                    <div className="insurance w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="insurance text-xl font-bold p-2 ">Main Insurance:</span>
                        <select type="text" name="zipcode" id="zipcode" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Insurance}>   
                        <option>Select</option>
                        <option>Medicaid</option>
                        <option>CHIP Medicad</option>
                        <option>Medicare</option>
                        <option>Other Public Insurance</option>
                        <option>Private Insurance</option>
                        <option>None</option>
                        </select>
                    </div>

                    <div className="employment w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="employment text-xl font-bold p-2 ">Employment Status:</span>
                        <select type="text" name="employment" id="employment" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Employment}>   
                        <option>Select</option>
                        <option>Full time work</option>
                        <option>Part time or temperory work</option>
                        <option>Unemployed</option>
                        <option>Unemployed but not seeking work</option>
                        <option>Pefer Not to say</option>               
                        </select>
                    </div>

                    <div className="housing w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="housing text-xl font-bold p-2 ">Housing Status:</span>
                        <select type="text" name="housing" id="housing" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Housing}>   
                        <option>Select</option>
                        <option>I have a house</option>
                        <option>I don't have a house</option>
                        <option>Pefer Not to say</option>
                        </select>
                    </div>

                    <div className="stress w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="stress text-xl font-bold p-2 ">How Stressed are you?</span>
                        <select type="text" name="stress" id="stress" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Stress}>   
                        <option>Select</option>
                        <option>Very Much</option>
                        <option>Quite a bit</option>
                        <option>Somewhat</option>
                        <option>Little bit</option>
                        <option>Not at all</option>
                        <option>Prefer not say</option>
                        </select>
                    </div>

                    <div className="transport w-full h-auto flex flex-col justify-center items-start p-4  ">
                    <span className="transport text-xl font-bold p-2 ">Has lack of Transportation affected you?</span>
                        <select type="text" name="transport" id="transport" className = "w-full h-auto border-2 rounded-lg border-green-500 border-solid border-opacity-70" placeholder = "" ref = {Transport}>   
                        <option>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Prefer not say</option>
                        </select>
                    </div>

                    <div className="button flex justify-center items-center p-4">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full md:w-2/5 h-auto text-xl" type = "submit">
                        Predict Score
                    </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Survey_form;