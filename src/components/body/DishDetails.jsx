import LoadComment from './LoadComment';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = ({ dish }) => {
    return (
        <div className="mt-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    <CardText>{dish.price}/-</CardText>
                </CardBody>
                <hr />
                <LoadComment comments={dish.comments} />
            </Card>
        </div>
    );
};

export default DishDetail;
