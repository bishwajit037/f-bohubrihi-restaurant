import React from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
    };

    render() {
        const menu = this.state.dishes.map((item) => {
            return (
                <div key={item.id}>
                    <MenuItem dish={item} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">{menu}</div>
                </div>
            </div>
        );
    }
}

export default Menu;