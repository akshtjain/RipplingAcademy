export const apiWrapper = async (func, params) => {
    return func(...params)
        .then((response) => {
            return response.json();
        })
        .then((data)=>{
            return data;
        })
}
