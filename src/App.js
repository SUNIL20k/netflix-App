import Navbar from "./navbar";
import Body from "./body";
import MobileNavbar from "./mobile/nav";
import MobileBody from "./mobile/Mobilebody";
import MobileFooter from "./mobile/footer";


const App=()=>{
  return (
    <div className="App">
         <Navbar/>
         <MobileNavbar/>
         <Body/>
         <MobileBody/>
         <MobileFooter/>
    </div>
  );
}

export default App;
