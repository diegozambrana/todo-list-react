import { API_DOMAIN } from '../utils/constants';
import { useState } from 'react';

export const useAuth = () => {
  const [response, setResponse] = useState();
  const [flags, setFlags] = useState({error: false, success: false, complete: false});

  const authenticate = async (data) => {
    console.log(`API_DOMAIN`, API_DOMAIN)
    const res = await fetch(`${API_DOMAIN}/api/auth/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(`->res`, res)
    const dataRes = await res.json()
    localStorage.setItem('token', dataRes.access)
    localStorage.setItem('refresh', dataRes.refresh)
    if(res.status === 200) setFlags(oldFlags => ({...oldFlags, success: true}));
    if(res.status >= 400) setFlags(oldFlags => ({...oldFlags, error: true}));
    setFlags(oldFlags => ({...oldFlags, complete: true}));

    setResponse(dataRes)
  }

  return {authenticate, response, ...flags}
}


// TODO: Register api http://localhost:8000/api/auth/register