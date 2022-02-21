import { useState, useEffect } from "react";
const reactStringReplace = require("react-string-replace");

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

  const hoverStyle = {
    cursor: "pointer",
  };

  //create the event hanlder, capture the value and set it to the state searchUser
  const getUser = (e: any) => {
    setSearchUser(e.target.value);
  };
  console.log(searchUser);

  

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
      {isLoading ? (
        <div>...Loading...</div>
      ) : (
        <div style={hoverStyle} className="grid grid-cols-4 gap-2 p-2 mt-20">
          {data?.results
            .filter((val: any) => {
              if (searchUser === "") {
                return val;
              } else if (
                val.name.first.toLowerCase().includes(searchUser.toLowerCase())
              ) {
                return val;
              } else if (
                val.email.toLowerCase().includes(searchUser.toLowerCase())
              ) {
                return val;
              } else if (
                val.location.city
                  .toLowerCase()
                  .includes(searchUser.toLowerCase())
              ) {
                return val;
              }
            })
            .map((d: any) => 

            (
        <div style={hoverStyle} className="text-blue-900 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-white shadow-slate-500 bg-white hover:opacity-95 rounded-lg container p-5">
                <img
                  className="rounded-full w-44 h-44 "
                  src={d.picture.large}
                />
                
                <h2 style={{backgroundColor: d.name.title === 'Ms' ? 'blue' : 'white' }}>{d.name.title}</h2>
              
                <h3 className="font-bold text-3xl font-serif">
                  {" "}
                  {d.name.first} {d.name.last}
                </h3>
                <p className=" text-md font-bold ">Gender: {d.gender}</p>

                <p className=" text-md  font-bold ">Contact: {d.email}</p>
                <p className=" text-md font-bold ">City: {d.location.city}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Users;
