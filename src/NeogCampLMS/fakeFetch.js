export default function fakeFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { id: 1, name: "Pen", price: 30, quantity: 100 },
              { id: 2, name: "Pencil", price: 50, quantity: 50 },
              { id: 3, name: "Paper", price: 20, quantity: 30 },
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Item list not found."
        });
      }
    }, 2000)
  });
}