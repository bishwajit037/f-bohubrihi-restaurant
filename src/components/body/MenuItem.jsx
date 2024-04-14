// import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onDishSelect }) => {
    return (
        <div className="text-center mb-1 mt-1">
            <Card>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={dish.name}
                        src={dish.image}
                        style={{ opacity: '0.5' }}
                    />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: 'pointer' }}
                            onClick={() => onDishSelect(dish)}
                        >
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;

// import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

// const MenuItem = (props) => {
//     return (
//         <div className="text-center mb-1 mt-1">
//             <Card>
//                 <CardBody>
//                     <CardImg
//                         width="100%"
//                         alt={props.dish.name}
//                         src={props.dish.image}
//                         style={{ opacity: '0.5' }}
//                     />
//                     <CardImgOverlay>
//                         <CardTitle style={{ cursor: 'pointer' }}>
//                             {props.dish.name}
//                         </CardTitle>
//                     </CardImgOverlay>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };
// export default MenuItem;
