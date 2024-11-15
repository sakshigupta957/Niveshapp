/* css for mobile view*/
@media (max-width: 1250px) {
  .group-links button {
    height:5rem;
    cursor: pointer;
    border:none;
    color: grey;
    background: transparent;
    padding: 1rem;
    font: inherit;
    font-weight: bolder;
    font-size:1rem;
  }
  .group{
  
    margin:1rem 0.5rem;
    position:relative;
    border:1px white;
    border-radius:10px;
    background-color:white;
  }
  .group-links {
    list-style: none;
    margin-top: 3rem;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .group-links button:focus {
    outline: none;
  }
  
  .group-links button:hover,
  .group-links button:active {
    color: rgb(116, 112, 112);
      border-bottom:4px solid #57d9b2;
  }
  .group-links li {
    margin: 2rem 1.5rem;
    font-size:1.2rem;
  }
  .group-links {
    flex-direction: row;
  }
  .mission_def{
    background-color: #fff1d333;
    border-radius: 10px;
    width:95%;
    padding:1rem;
    font-size:1.2rem;
    margin:3rem auto 1rem auto;
    line-height: 1.5;
   } 

  
}
@media(max-width:900px){

  .mission_def{
    background-color: #fff1d333;
    border-radius: 10px;
    width:95%;
    padding:1rem;
    font-size:1rem;
    margin:3rem auto 1rem auto;
    line-height: 1.5;
   } 

.group{
  
  margin:1rem 0.5rem;
  position:relative;
  border:1px white;
  border-radius:10px;
  background-color:white;
}



.group-links {
    list-style: none;
    margin-top: 3rem;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .group-links li {
    margin: 1.5rem;
    font-size:1.7rem;
  }
  
  .group-links button {
    height:4rem;
    cursor: pointer;
    border:none;
    color: grey;
    background: transparent;
    padding: 1rem;
    font: inherit;
    font-weight: bolder;
    font-size:1rem;
    
  }
  
  .group-links button:focus {
    outline: none;
  }
  
  .group-links button:hover,
  .group-links button:active {
    color: rgb(116, 112, 112);
    border-bottom:4px solid #57d9b2;
  }
}


  /* css for desktop view*/
  @media (min-width: 1250px) {
    .group{
  
      margin:1rem 0.5rem;
      position:relative;
      border:1px white;
      border-radius:10px;
      background-color:white;
    }
    
    .group-links {
      list-style: none;
      margin-top: 3rem;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
   
  
    .group-links li {
      margin: 1.5rem;
      margin-left: 28px;
      margin-right: 28px;
      font-size:1.7rem;
    }
  
   .mission_def{
    background-color: #fff1d333;
    border-radius: 10px;
    width:100%;
    padding:1rem;
    font-size:1.5rem;
    margin:5rem auto 1rem auto;
    line-height: 1.5;
   } 
  
    
    .group-links button {
      height:4.2rem;
      cursor: pointer;
      border:none;
      color: grey;
      background: transparent;
      font: inherit;
      font-weight: bolder;
      font-size:1.2rem;
      transition: 0.4s;
    }
    
   
    .group-links button:focus {
      outline: none;
    }
    
    .group-links button:hover,
    .group-links button:active {
      color: rgb(116, 112, 112);
      border-bottom:4px solid #57d9b2;
    }

    
  }

  
