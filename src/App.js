import './App.css';
import React from 'react';
import firebase from './utils/firebase.utils';


function App() {

  const [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (userInfo) {
      setUser(userInfo);
    });
  }, []);

  return (
    <React.createContext.Provider value={{user, setUser}}>
      <Routes/>
    </React.createContext.Provider>
  );
}

export default App;
