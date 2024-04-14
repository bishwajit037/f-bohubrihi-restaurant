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
            </Card>
        </div>
    );
};

export default DishDetail;
