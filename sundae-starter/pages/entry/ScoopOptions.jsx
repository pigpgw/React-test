import { useOrderDetails } from '../../contexts/OrderDetails';
import Form from 'react-bootstrap/Form';

export const ScoopOptions = ({ name, imagePath }) => {
    const { updateItemCount } = useOrderDetails();
    return (
        <div>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
            <Form.Group controlId={`${name}-count`}>
                <Form.Label></Form.Label>
            </Form.Group>
        </div>
    );
};
