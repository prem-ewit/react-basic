import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet'

// import {Greeting} from './components/NamedExportSample'
// import Welcome from './components/WelcomeClassComponent';
// import Hello from './components/HelloWithJSX';
// import HelloWithoutJsx from './components/HelloWithoutJSX'
// import GreetWithProps from './components/GreetWithProps';
// import PropsWithUnkownContent from './components/PropsWithUnkownContent'
// import GreetClassComponentWithProps from './components/ClassComponentWithProps'

// import WelcomeMessageWithState from './components/WelcomeMessageWithState'
// import Counter from './components/Counter'
// import CounterWithCallback from './components/CounterWithCallback'
// import DestructuringWithProps from './components/DestructuringProps'

// import FunctionClick from './components/FunctionClick'
// import ClassClickEvent from './components/ClassClickEvent'
// import EventBind from './components/EventBind'
// import ErrorHandlingDemo from './components/ErrorHandlingDemo'
// import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
     {/* <MyComponent />
      <Greeting />
      <Welcome/>
      <Hello/>
      <HelloWithoutJsx/>
      <GreetWithProps name='Prem' alias ='Mr. Singh'/>
      <PropsWithUnkownContent name='SuperMan'>
          <button>Action</button>
      </PropsWithUnkownContent>
      <PropsWithUnkownContent name='Batman'>
          <p>This is child content</p>
      </PropsWithUnkownContent>
      <GreetClassComponentWithProps name="M.S. Dhoni" alias="Mahi"/>
      <WelcomeMessageWithState/>
      <Counter/>
      <CounterWithCallback/>
      <DestructuringWithProps name="M.S. Dhoni" alias="Mahi"/>*/}
      {/* <FunctionClick/>
      <ClassClickEvent/>
      <EventBind/> */}
      {/* <ErrorBoundary>
        <ErrorHandlingDemo heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorHandlingDemo heroName='SuperMan'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorHandlingDemo heroName='joker'/>
      </ErrorBoundary> */}
      {/* <ClickCounter/> */}
      <UserProvider value="Prem Singh">
         <ComponentA/>
      </UserProvider>
      <ComponentA/>
    </div>
  );
}

export default App;
