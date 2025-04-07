import React, { useState } from 'react';

const PostReview = () => {
    const [review, setReview] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carYear, setCarYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle review submission logic here
        console.log({ review, purchaseDate, carMake, carYear });
    };

    return (
        <div>
            <h1>Holdlamis Car Dealership</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Purchase Date</label>
                    <input type="date" className="form-control" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Car Make</label>
                    <select className="form-control" value={carMake} onChange={(e) => setCarMake(e.target.value)}>
                        <option value="">Choose Car Make and Model</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Toyota">Toyota</option>
                        {/* Add more car makes as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Car Year</label>
                    <input type="number" className="form-control" value={carYear} onChange={(e) => setCarYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Review</label>
                    <textarea className="form-control" rows="5" value={review} onChange={(e) => setReview(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Post Review</button>
            </form>
        </div>
    );
};

export default PostReview;
