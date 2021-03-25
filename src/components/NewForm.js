import {useState, useEffect} from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function NewForm( {setReg ,setString}) {
	let [regState, setRegState] = useState("");
	let [stringState, setStringState] = useState('');
	
	useEffect(() => {
		
	  }, [])

	function handleRegChange(e) {
		setRegState(e.target.value);
	}
	function handleStringChange(e)
	{
		setStringState(e.target.value);
	}
	function handleClick(e) {
		e.preventDefault();
		setReg(regState);
		setString(stringState);
		//setRegState('');
		//setStringState('');

	}
	return (
		<Container className="my-2 p-2 justify-content-center">
			<Form className="p-2 my-2"onSubmit={handleClick}>
				<Form.Group>
					<Form.Label className="blockquote">Regular Expression</Form.Label>
					<Form.Control className="my-2" type="text" placeholder="Manually enter a regular expression" onChange={handleRegChange} value={regState}/>
					<Form.Control as="select" onChange={handleRegChange}>
						<option value="">Enter Your Own</option>
      					<option value="([A-Z]{5})(\^{1})(\d{0,5})?">5 capital letters A-Z, exactly one ‘^’ character, then an optional 5-digit number.</option>
      					<option value="[a-zA-Z0-9-]{8}">Exactly 8 alphanumeric characters (a-z, A-Z, 0-9) and hyphens in any combination.</option>
      					<option value="[zyz].*zz$">Begins with the characters ‘zyz’ that end with ‘zz</option>
      					<option value="[A-Z]([a-z]|\.)+(\s([A-Z]([a-z]*|\.)\s[A-Z][a-z]*|[A-Z][a-z]*)){0,1}(\W)*([A-Z][a-z]\.){0,1}">Names</option>
    				</Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Label className="blockquote">String to Check</Form.Label>
					<Form.Control type="text" placeholder="Enter String" onChange={handleStringChange} value={stringState}/>
				</Form.Group>
				<Button variant="outline-primary" type="submit" size="lg">
					Check
				</Button>
			</Form>
		</Container>
	);
}
