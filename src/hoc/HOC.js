import React,{useState,useEffect} from "react";

const HOC = (WrappedComponenet, entity) => {
  const UpdatedComponent= (props)=> {
    console.log(props);
   const [data, setData] = useState([]);
   const [term, setTerm] = useState("");
    useEffect(() => {
      
        const fetchData = async () => {
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/${entity}`
            );
            const json = await res.json();
           setData(json);
          };

          fetchData();
     
    }, [])
    
      
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });

      return (
        <div>
        {/* {console.log(props.name)} */}
          <h2>{entity}</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponenet data={filteredData} dummyprop="from hoc" {...props} ></WrappedComponenet>
        </div>
      );
    
  };
  return UpdatedComponent;
};


// const HOC = (WrappedComponenet, entity) => {
//     return class extends React.Component {
//       state = {
//         data: [],
//         term: "",
//       };
//       componentDidMount() {
//         const fetchData = async () => {
//           const res = await fetch(
//             `https://jsonplaceholder.typicode.com/${entity}`
//           );
//           const json = await res.json();
//           this.setState({ ...this.state, data: json });
//         };
//         fetchData();
//       }
//       render() {
//         let { term, data } = this.state;
//         let filteredData = data.slice(0, 10).filter((d) => {
//           if (entity === "users") {
//             const { name } = d;
//             return name.indexOf(term) >= 0;
//           }
//           if (entity === "todos") {
//             const { title } = d;
//             return title.indexOf(term) >= 0;
//           }
//         });
//         return (
//           <div>
//             <h2>{entity}</h2>
//             <input
//               type="text"
//               value={term}
//               onChange={(e) =>
//                 this.setState({ ...this.state, term: e.target.value })
//               }
//             />
//             <WrappedComponenet data={filteredData}></WrappedComponenet>
//           </div>
//         );
//       }
//     };
//   };
  

export default HOC;