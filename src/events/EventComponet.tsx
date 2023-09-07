const EventComponet = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }
  
  return(
    <div>
      <input onChange={handleChange}/>
    </div>
  );
}