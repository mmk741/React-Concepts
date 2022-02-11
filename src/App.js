import Main from "./renderProp/Main";
import ComponentRenderinsideWrapper from "./RenderPropsChildren/ComponentRenderinsideWrapper";
import UseReducerEg from "./useReducer/UseReducerEg";
import GithubState from "./useContext/context/GithubState";
import ConsumingFromContext from "./useContext/components/ConsumingFromContext";

function App() {



  return (
    <div>
      Eg for Render Prop: <Main />
      <br />
      Eg for Component render inside wrapper: <ComponentRenderinsideWrapper />
      <br />
      Eg for Use reducer: <UseReducerEg />
      <br />
      Eg: for UseContext :
      <GithubState>
        <ConsumingFromContext />
      </GithubState>
    </div>
  );
}

export default App;
