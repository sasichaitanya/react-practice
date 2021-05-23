import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'

function UserDetails(props) {
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserDetails()
  }, [])
  const getUserDetails = async () => {
    if (props.location && props.location.query && props.location.query.userDetails) {
      const receivedUser = props.location.query.userDetails;
      setUser(receivedUser)
    }
  }

  // const loopObject = () => {
  //   return (
  //     Object.entries(user).map(([key, value]) => (
  //       <div id={key}>
  //         {key} : {value}
  //       </div>
  //     ))
  //   )
  // }

  return (
    <div>
      <h3>User Details</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserDetails;
