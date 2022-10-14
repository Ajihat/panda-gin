import { useAuthContext } from "context/AuthContext/useAuthContext";

export const Personal = () => {
    const { setUserJwtToken } = useAuthContext();
    return (
        <div className="personal">
            <h1>This is protected personal page</h1>
            <button onClick={() => setUserJwtToken(null)}>Log out</button>
        </div>
    );
};
