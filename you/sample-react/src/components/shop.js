import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
function Shop() {
  
  const [users, setUsers] = useState([])
  const [usersLoading, setusersLoading] = useState(true)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    const data = await fetch(url)
    const users = await data.json()
    setusersLoading(false)
    setUsers(users)
  }

  const renderUsers = () => {
    return usersLoading ?
      <h3>Loading ...</h3> :
      users.map((user) => {
        return <Link key={user.id} to={{
          pathname: `/shop/${user.id}`,
          query: {
            userDetails: user
          }
        }}> <p>{user.name}</p> </Link>
      })
  }
  return (
    <div>
      <h3>{'--> Users <--'}</h3>
      <div>{renderUsers()}</div>


    </div>
  );
}

export default Shop;
