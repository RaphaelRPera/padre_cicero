// import axios from 'axios'

// const baseUrl = 'http://localhost:3003'

// export const addProduct = async (data) => {
//     const body = data
//     console.log(`[services > addProduct > body]`, body)
//     axios.post(`${baseUrl}/products/add`, body)
//         .then(response => {
//             console.log('[services]: [addProduct]: response =', response.status)
//             return true
//         })
//         .catch(error => {
//             console.log('[services]: [addProduct]: error =', error)
//             return false
//         })
// }

// export const getProducts = async (setAllProducts) => {
//     await axios.get(`${baseUrl}/products/all`)
//         .then(response => {
//             // console.log(response.data)
//             setAllProducts(response.data)
//             // return response
//         })
//         .catch(error => {
//             // return error
//         })
// }