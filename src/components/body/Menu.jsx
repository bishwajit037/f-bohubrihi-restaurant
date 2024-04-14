import { useState } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetails';

const Menu = () => {
    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);

    const handleDishSelect = (dish) => {
        console.log(dish);
        setSelectedDish(dish);
    };

    const menuItems = dishes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} onDishSelect={handleDishSelect} />
    ));

    let dishDetail = null;
    if (selectedDish != null) {
        dishDetail = <DishDetail dish={selectedDish} />;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">{menuItems}</div>
                <div className="col-6">{dishDetail}</div>
            </div>
        </div>
    );
};

export default Menu;
