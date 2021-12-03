import React from 'react';
import Navigation from '../Navigation/Navigation';

const Subscription = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div style={{ marginTop: '8%' }} className="container w-50">
                <h1 className="mb-5">Subscription</h1>
                <div class="card w-75 m-auto">
                    <div class="card-body text-start">
                        <h5 class="card-title">Premium Package</h5>
                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sed nemo veniam distinctio, hic consequuntur totam nesciunt ea pariatur velit, enim quia atque debitis deserunt nisi nobis dolorem omnis? Illum.</p>
                        <h5>Price : $5</h5>
                        <a href="#" class="btn btn-primary">Subscribe Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;