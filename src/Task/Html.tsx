function Html(){
    return(
        <>
        <div className="bg-green-800 h-300">
        <div className="bg-green-200 ml-80 mr-80 w-20% h-275">
            <h1 className="text-5xl text-center text-danger p-2">Student Redistration Form</h1>
            <table>
            <tr>
                <th className="text-black ml-5 pl-5 pt-5">First Name :</th>
                <td><input type="text" className="bg-white ml-4"/>(max 30 characters a-z and A-Z)</td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2 ">LAST NAME :</th>
                <td><input type="text" className="bg-white ml-4"/>(max 30 characters a-z and A-Z)</td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">Date of Birth :</th>
                <td><input type="date" className="ml-4 bg-white"/></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">EMAIL ID :</th>
                <td><input type="text" name="Email_Id" className="bg-white ml-4" /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">MOBILE NUMBER :</th>
                <td><input type="text" name="Mobile_Number" className="bg-white ml-4" />(10 digit number)</td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">GENDER :</th>
                <td className="pl-5">Male <input type="radio" name="Gender" value="Male" className="bg-white ml-2" />
                Female <input type="radio" name="Gender" value="Female" className="bg-white ml-2" /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">ADDRESS :</th>
                <td><textarea name="Address" className="bg-white ml-5" ></textarea></td>
             
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">CITY :</th>
                <td><input type="text" name="City" className="bg-white ml-5" /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">PIN CODE :</th>
                <td><input type="text" name="Pin_Code" className="bg-white ml-5"  /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">STATE :</th>
                <td><input type="text" name="State" className="bg-white ml-5" /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">COUNTRY :</th>
                <td><input type="text" name="Country" value="India" className="bg-white ml-5" /></td>
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">HOBBIES :</th>
                <td className="pl-5">Drawing
                    <input type="checkbox" name="Hobby_Drawing" value="Drawing" className="ml-2"/>
                    Singing
                    <input type="checkbox" name="Hobby_Singing" value="Singing" className="ml-2"/>
                    Dancing
                    <input type="checkbox" name="Hobby_Dancing" value="Dancing" className="ml-2"/>
                    Sketching
                    <input type="checkbox" name="Hobby_Cooking" value="Cooking" className="ml-2"/>
                    Others
                    <input type="checkbox" name="Hobby_Other" value="Other" className="ml-2"/>
                    <input type="text" name="Other_Hobby" />
                </td>               
            </tr>
            <br></br>
            <tr>
                <th className="text-black pl-5 pt-2">QUALIFICATION :</th>
                <td>
                    <table className="ml-5">
                        <tr>
                            <td align="left"><b>Sl.No.</b></td>
                            <td align="left"><b>Examination</b></td>
                            <td align="center"><b>Board</b></td>
                            <td align="left"><b>Percentage</b></td>
                            <td align="left"><b>Year of Passing</b></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td className="text-black ">1</td>
                            <td className="text-black ">Class X</td>
                            <td><input type="text" name="ClassX_Board" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="ClassX_Percentage" className="bg-white text-center w-30" /></td>
                            <td><input type="text" name="ClassX_YrOfPassing" className="bg-white text-center w-30" /></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td className="text-black ">2</td>
                            <td className="text-black ">Class XII</td>
                            <td><input type="text" name="ClassXII_Board" className="bg-white text-center w-30" /></td>
                            <td><input type="text" name="ClassXII_Percentage" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="ClassXII_YrOfPassing" className="bg-white text-center w-30" /></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td className="text-black ">3</td>
                            <td className="text-black ">Graduation</td>
                            <td><input type="text" name="Graduation_Board" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="Graduation_Percentage" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="Graduation_Yr Of Passing" className="bg-white text-center w-30"/></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td className="text-black ">4</td>
                            <td className="text-black ">Masters</td>
                            <td><input type="text" name="Masters_Board" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="Masters_Percentage" className="bg-white text-center w-30"/></td>
                            <td><input type="text" name="Masters_YrOfPassing" className="bg-white text-center w-30"/></td>
                        </tr>
                    </table>
                    <button className="bg-blue-900 text-white p-1 ml-50 mt-5">Submit</button>
                </td>
            </tr>
            </table>
        </div>
        </div>
    </>
)
}

export default Html