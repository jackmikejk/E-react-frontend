import React from 'react';
import "./card-style.css";

const cardData = [
    {
        title: 'Aim',
        description: 'Our aim is to provide the highest quality healthcare services to our patients with unwavering dedication and compassion. We are committed to ensuring the well-being of our community by offering comprehensive medical care, state-of-the-art facilities, and a team of experienced healthcare professionals. Our primary goal is to make a positive impact on the lives of our patients by delivering personalized healthcare and contributing to their overall health and happiness.',
        image: 'image.jpg',
        backgroundColor: '#FF5733', 
    },  
    {
        title: 'Vision',
        description: 'Our vision is to be a leading healthcare institution renowned for excellence in patient care, medical research, and education. We aspire to create a healthier and happier community by constantly innovating and adopting the latest medical technologies and practices. We envision a future where every individual receives the highest standard of healthcare, where health disparities are reduced, and where our hospital remains a center of medical excellence.',
        image: 'imagee.jpg',
        backgroundColor: '#33FF57', 
    },
    {
        title: 'Achivements',
        description: 'Contributing to medical research, high patient satisfaction rates, and a strong commitment to community outreach through free medical camps and health education. Our specialized centers of excellence, a team of dedicated healthcare professionals, and numerous awards and recognitions further reflect our pursuit of excellence. We continuously reduce patient wait times, prioritize patient education, and aim to empower individuals to make informed healthcare decisions. Our achievements underscore our dedication to providing quality healthcare, making us a trusted healthcare partner in our community.',
        image: 'imageee.jpg',
        backgroundColor: '#5733FF',
    },
];

const Card = (props) => {
    const cardStyle = {
        backgroundColor: "white", // Use the backgroundColor property from props
    };
    return (
        <div className='card text-center' style={cardStyle}>
            {/* <div className='overflow'>
                <img src={props.image} alt='Card Image' className='card-img-top' />
            </div> */}
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>{props.description}</p>
                
            </div>
        </div>
    );
}

const CardList = () => {
    return (
        <div className='container'style={{ marginTop: '12rem', marginBottom: '12rem' }}>
            <div className='row'>
                {cardData.map((card, index) => (
                    <div className='col-md-4' key={index}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardList;
