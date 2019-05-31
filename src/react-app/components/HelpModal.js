import React from 'react';
import { Modal, Button } from 'qualtrics-ui-react';

const HelpModal = () => {
	const [open, setOpen] = React.useState(true);
	const toggle = () => setOpen(v => !v);
	return (
		<Modal isOpen={open}>
			<Modal.Header>
				<Modal.Header.Title>Dynamic Modal</Modal.Header.Title>
			</Modal.Header>
			<Modal.Body>Here is the modal body!</Modal.Body>
			<Modal.Footer>
				<Button left={true} type="info">
					Info
				</Button>
				<Button onClick={toggle} type="success">
					Save
				</Button>
				<Button onClick={toggle} hover={true}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default HelpModal;
