import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import SHOP_DATA from './ShopData';

class ShopPage extends React.Component {
    constructor(props){
        super()
        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;