import Main from "./renderProp/Main";
import ComponentRenderinsideWrapper from "./RenderPropsChildren/ComponentRenderinsideWrapper";
import UseReducerEg from "./useReducer/UseReducerEg";
import GithubState from "./useContext/context/GithubState";
import ConsumingFromContext from "./useContext/components/ConsumingFromContext";
import Parent from "./propsDotChildren/Parent"
import SearchUsers from "./hoc/UserList";
import SearchTodos from "./hoc/TodoList";
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
      <br/>
Eg: ex of props.children
<Parent/>

<SearchUsers  name='sending props from app to todolist'/>
<SearchTodos/>
    
    </div>
  );
}

export default App;


