import './App.css'
import axios from "axios";
import UserInfo from './components/UserInfo'
import RenderPropsPattern from './components/RenderPropsPattern';

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <h1>Design Pattern: container component concept with render props pattern</h1>
      <RenderPropsPattern
        getData={() => fetchData("/api/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      />
    </>
  )
}

export default App
