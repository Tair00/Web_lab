import React from 'react';

const ErrorPage = ({ errorCode }) => {
    return (
        <div>
            <h1>Error Page</h1>
            <p>Error {errorCode}: Something went wrong. Please try again later.</p>
        </div>
    );
};

export default ErrorPage;
