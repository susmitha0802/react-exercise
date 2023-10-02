import { useMutation } from "react-query";
import axios from "axios";
import '../App.css';

export const PostCall = () => {

    const mutation = useMutation((postData) => axios.post('https://jsonplaceholder.typicode.com/posts', postData));

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const postData = {};
        for(const key in formData) {
            postData[`${key}`] = formData[`${key}`];
        }

        mutation.mutate(postData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="style-margin">
                    <label> Title: {" "}
                        <input type="text" name="title"/>
                    </label>
                </div>
                <div className="style-margin">
                    <label> Body: {" "}
                        <input type="textarea" name="body"/>
                    </label>
                </div>
                <button type="submit" className="style-margin">Submit</button>
            </form>
            {mutation.isLoading && <p>Submitting...</p>}
            {mutation.isSuccess && <p>Posted successfully</p>}
            {mutation.isError && <p>Error</p>}
        </>
    );
}