import React , {useEffect, useState} from "react"
import axios from 'axios'
import "../src/App.css"



function App() {
  const [file , setFile] = useState();
  const [image , setImage] = useState();
  const [iden , setIden] = useState();
  const [id , setId] = useState("");
  const [firstName , setFirstName] = useState();
  const [lastName , setLastName] = useState();
  const [dob , setDob] = useState();
  const [doi , setDoi] = useState();
  const [doe , setDoe] = useState();
  const [okstate , setOkState] = useState("");


  const handleFileChange = (e) => {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  };




  const upload = () => {
    const formData = new FormData();
    formData.append("file" , file);

    // console.log(formData);
    axios.post('http://localhost:5000/upload' , formData)
    .then(res => {
      // console.log("upload -> " , res);
      
      setImage(res.data.image);
      setId(res.data._id);
      
  })
    .catch(err => console.log(err))
  }

  const analyse = async () => {
    try {
      const uri = `http://localhost:5000/api/users/${id}`;
      // console.log(id , uri)
      const res = await axios.get(uri);
      console.log("analyse id ->" , id)
      console.log("analyse resonse ->" , res)

      setIden(res.data.identificationNumber);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setDob(res.data.dateOfBirth);
      setDoi(res.data.dateOfIssue);
      setDoe(res.data.dateOfExpiry);
      setOkState("OK");

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  return ( 
    <>
      
      <div className="ocr">
        <p>OCR - RECOGNITION APP</p>
      </div>
      <div className="upload">
        <input type="file" onChange={handleFileChange}/>
        <button type="button" className="btn2" onClick={upload}> Upload</button>
        <button type="button" className="btn" onClick={analyse}>Analyse</button>
      </div>

      <div className="par">
        <div className="img">
          <img src = {'http://localhost:5000/Images/' + image} alt=""/>
        </div>
        <div className="items">
          {okstate === "OK" ? (
            <div>
            
              <p>First Name : <span>{firstName}</span></p>
              <p>Last Name : <span>{lastName}</span></p>
              <p>Date Of Birth : <span>{dob}</span></p>
              <p>Issue Date : <span>{doi}</span></p>
              <p>Expiry Date : <span>{doe}</span></p>
            </div>
            
          ) : (
            <p></p>
          )}
          
          
        </div>
      </div>
      
    </>
  );
}

export default App;