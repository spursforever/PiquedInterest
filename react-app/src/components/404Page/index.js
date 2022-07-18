import { Link } from "react-router-dom";

const UnauthorizedPage = () => {

    return (
        <>
        <div>
            <h2 classNname="first-text"> Interesting... How did you arrive here? </h2>
        </div>
        <div>
            <h3 className="redirect-text"> <Link to={'/'}>Back to our lovely pin page!</Link></h3>
        </div>
        </>
        
    )
}

export default UnauthorizedPage