import Main from './renderProp/Main'
import ComponentRenderinsideWrapper from './RenderPropsChildren/ComponentRenderinsideWrapper';
import UseReducerEg from './useReducer/UseReducerEg';

function App() {
  return (
    <div >
      <Main/>
     
      <ComponentRenderinsideWrapper/>
      <br/>
     
      <UseReducerEg/>
    </div>
  );
}

export default App;
