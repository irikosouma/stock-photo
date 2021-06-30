import './App.css';
//components
import MainComponent from './components'
// import List from './list';
function App() {
  return (
    <div className="App">
      <MainComponent />
      {/* <List/> */}
    </div>
  );
}

export default App;
// function getDocHeight() {
    //     var D = document;
    //     return Math.max(
    //         D.body.scrollHeight, D.documentElement.scrollHeight,
    //         D.body.offsetHeight, D.documentElement.offsetHeight,
    //         D.body.clientHeight, D.documentElement.clientHeight
    //     );
    // }
    // window.scroll(function() {
    //     if(window.scrollTop() + window.height() == getDocHeight()) {
    //         alert("bottom!");
    //     }
    // });

        // window.onscroll = function() {
    //     let localNumber = defaultNumber + 1
    //     setDefaultNumber(localNumber)
    //     if (500 + window.pageYOffset >= document.body.offsetHeight) {
    //         // setIsFetching(true)
    //         let localNumber = defaultNumber + 1
    //         setDefaultNumber(localNumber)
    //         if(inputState === ""){
    //             fetch(`https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${localNumber}`)
    //             .then(response => response.json())
    //             .then(json => {
    //                 // setIsFetching(false)
    //                 let newList = [...list, ...json]
    //                 setList(newList)
    //             })
    //             .catch(err => console.log('Error to get data', err))
    //         }
    //         else {
    //             let localNumber = defaultNumber + 1
    //             fetch(`https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${localNumber}&query=${inputState}`)
    //             .then(response => response.json())
    //             .then(json => {
    //                 // setIsFetching(false)
    //                 let newList = [...list, ...json.results]
    //                 setList(newList)
    //             })
    //             .catch(err => console.log('Error to get data', err))
    //         }
    //     }
        
    // }