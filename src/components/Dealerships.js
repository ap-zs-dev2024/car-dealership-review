import React from 'react';

const Dealerships = () => {
    const dealerships = [
        { id: 1, name: "Holdlamis Car Dealership", city: "El Paso", address: "3 Nova Court", zip: "88563", state: "Texas" },
        { id: 2, name: "Stronghold Car Dealership", city: "Wilkes Barre", address: "2 Burrows Hill", zip: "18763", state: "Pennsylvania" },
        // Add more dealerships as needed
    ];

    return (
        <div>
            <h1>Dealerships</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dealer Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {dealerships.map(dealer => (
                        <tr key={dealer.id}>
                            <td>{dealer.id}</td>
                            <td>
                                <Link to={`/dealership/${dealer.id}`}>{dealer.name}</Link>
                            </td>
                            <td>{dealer.city}</td>
                            <td>{dealer.address}</td>
                            <td>{dealer.zip}</td>
                            <td>{dealer.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dealerships;
