import { useState } from "react";

const Authenticate = ({ token }) => {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {

            if (!token) {
                setSuccessMessage(null);
                setError("Please sign up before authenticating");
                return;
            }

            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" , 
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRkZGQiLCJwYXNzd29yZCI6ImRkZGRkIiwiaWF0IjoxNzA4NjM2NjI2fQ.YE5fypaeFaZP1uGWDf_Nj1UPLyZ0B4pG5L2kfteeBYg`
        }})
            const result = await response.json();
            console.log(result)
            setSuccessMessage(result.message)

            if (result.success) {
                setError(null);
                setSuccessMessage(`${result.data.username}, your're ${result.message}`);
            } else {
                setSuccessMessage(null);
                setError(`Please provide a valid token.`);
            }
    } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authentication Token!</button>
        </div>
    );
}

export default Authenticate;