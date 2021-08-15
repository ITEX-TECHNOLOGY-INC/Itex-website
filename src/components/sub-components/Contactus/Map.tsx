import React from 'react';

const Map = () => {
    return (
        <>
            <h2>find us here</h2>
        <div className={`map`}>

            <iframe title={`googleMap`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.3854902471408!2d-122.84468958496257!3d49.13630488905298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da2e70958d39%3A0x96c17ef1e385f5ca!2s7360%20137%20St%20%23678%2C%20Surrey%2C%20BC%20V3W%201A3!5e0!3m2!1sen!2sca!4v1628906741779!5m2!1sen!2sca"
                width="600" height="450" loading="lazy"></iframe>
        </div>
            </>
    );
};

export default Map;