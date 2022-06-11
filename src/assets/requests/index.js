import axios from "axios"

function post(url, data) {
    const headerJSON = {
        "Content-Type": "application/json"
    };
    // const { data, url } = coverFormData(obj);
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: headerJSON
        })
            .then(res => {
                // obj.success ? obj.success(res) : null
                resolve(res.data);
            })
            .catch(error => {
                // obj.error ? obj.error(error) : null;
                reject(error);
            })
    })

}

let requests = {}
requests.post = post

export default requests

