import {useState, useEffect} from 'react'



export type UsersList = {
  first: string,
  last: string,
  title: string,
  email: string,
  city: string
}


function Users () {

const [isLoading, setLoading] = useState(false)
const [data, setData] = useState(false)



useEffect(() => {
    setLoading(true);

    const fetchList = async ():Promise<UsersList> => {
      const newList = await fetch(
        "https://randomuser.me/api/?results=20"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    fetchList();
  }, []);

  if (isLoading)
    return <p className="text-black text-3xl text-center">Loading...</p>;
  if (!data)
    return <p className="text-black text-3xl text-center">No profile data</p>;




    return (
        <div className='grid grid-cols-4 gap-2 p-2'>
         
            {data?.results.map((d: any)=> (
              <div className=''> 
              
              <div className="border-4">
                <img src={d.picture.medium} />
              <p className='text-blue-500 text-2xl font-bold'> {d.name.title} {d.name.first} {d.name.last}</p>
                <p className='font-bold text-lg font-serif'>Gender: {d.gender}</p>
            <p className='font-bold text-lg font-serif'>Contact: {d.email}</p>
            <p className='font-bold text-lg font-serif'>City: {d.location.city}</p>
            </div>
            </div>

            ))}
        </div>
    )


}

export default Users;