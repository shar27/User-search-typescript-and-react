import { AnyRecord } from "dns";
import { useState, useEffect } from "react";

export type UsersList = {
  first: string;
  last: string;
  title: string;
  email: string;
  city: string;
};

function Users() {
  //state for data fetching
  const [isLoading, setLoading] = useState(false);
  //storing data
  const [data, setData] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  


  console.log(searchUser);

  //fetching data
  useEffect(() => {
    setLoading(true);

    const fetchList = async (): Promise<UsersList> => {
      const result: any = await fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data);
          
        });
        
      return result;
    };
    fetchList();
    
    
  }, []);

  
  

  //create the event hanlder, capture the value and set it to the state searchUser
  const getUser = (e: any) => {
    setSearchUser(e.target.value);
  };
  console.log(searchUser);

  //  const filtered: any = .filter((names: any) =>
  //   names.first.includes(searchUser.toLowerCase())
  //  );

  if (isLoading)
    return <p className="text-black text-3xl text-center">Loading...</p>;
  if (!data)
    return <p className="text-black text-3xl text-center">No profile data</p>;

  return (
    <div>
      <div className="flex justify-center container p-5 ml-10">
        <input
          className=" w-full p-4 border-2 mt-20 rounded-lg"
          placeholder="Search..."
          value={searchUser}
          onChange={getUser}
        />
      </div>

      <div className="grid grid-cols-4 gap-2 p-2 mt-20">
        {data?.results.filter((val: any)=>{
          if (searchUser === "") {
            return val
          } else if (val.name.first.toLowerCase().includes(searchUser.toLowerCase())) { 
              return val          
          } else if (val.email.toLowerCase().includes(searchUser.toLowerCase())){
            return val
          } else if 
            (val.city.toLowerCase().includes(searchUser.toLowerCase())){
              return val
            } else (!data)
          
            }).map((d: any) => (
          <div className="border-4">
            <img src={d.picture.medium} />
            <p className="text-blue-500 text-2xl font-bold">
              {" "}
              {d.name.title} {d.name.first} {d.name.last}
            </p>
            <p className="font-bold text-lg font-serif">Gender: {d.gender}</p>
            <p className="font-bold text-lg font-serif">Contact: {d.email}</p>
            <p className="font-bold text-lg font-serif">
              City: {d.location.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
