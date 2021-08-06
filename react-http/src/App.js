import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm'
import DataFetching from './components/DataFetching'
import DataFetchById from './components/DataFetchById'

function App() {
  return (
    <div className="App">
      {/* <PostList/> */}
      {/* <PostForm /> */}
      {/* <DataFetching/> */}
      <DataFetchById/>
    </div>
  );
}

export default App;
