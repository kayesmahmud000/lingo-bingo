
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className='container text-2xl font-bold my-10 py-10 text-center mx-auto'>
            <h2> Page  not found</h2>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;