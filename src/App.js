import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/NewForm";
import {Container, Alert, Navbar} from 'react-bootstrap';


function App() {
  let [reg, setReg] = useState('');
  let [string, setString] = useState('');
  let [solution, setSolution] = useState();
  let [match, setMatch] = useState('');
  useEffect(() => {
    let regExpression = new RegExp(reg, 'g');
    if(regExpression.test(string) === true)
    {
      setMatch(string.match(regExpression));
      setSolution(true);
 
    }
    else
    {
      setSolution(false);
      setMatch(string.match(regExpression));
    }
  }, [reg, string])
	return (
		<div className="App">
      <Navbar bg="dark" variant='dark'>
        <Navbar.Brand>Regular Expression Check</Navbar.Brand>
      </Navbar>
      <Container>
        <Form setReg={setReg} setString={setString}/>
        <Container style={{textAlign: "center"}} className="p-2"> 
         {solution ? <Alert variant={'success'}>Valid</Alert>:<Alert variant={'danger'}>Invalid</Alert>}
        </Container>
      </Container>
      <h1 className="display-3" style={{textAlign: "center"}}>Match: {match}</h1>
		</div>
	);
}

export default App;
