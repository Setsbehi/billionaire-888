const apiKey =
  "arC1cmx6en2567wpsUImPdfOrXuWszGsT-W7OQV6X-ySqE9XPcEH0sK5CbNvFUfD8oxp22KBYetmgP2PXe4_QR07-WdX0QrTnFT9pI4mT3Xct-llpnZV-wzxm-mhZ3Yx"; // Insert API key here.

// export default function yelp({ term, location, sortBy }) {
//   const response = fetch(
//     `https://www.yelp.com/search?term=${term}&location=${location}&sort=${sortBy}`,
//     {
//       method: "GET",
//     }
//   );

//   if (!response.ok) {
//     return "network aldaa";
//   }
//   if (
//     (response) => {
//       return response.json();
//     }
//   )
//     if (
//       (jsonResponce) => {
//         if (jsonResponce.businesses) {
//           return jsonResponce.businesses.map((business) => ({
//             id: business.id,
//             imageSrc: business.image_Url,
//             name: business.name,
//             address: business.location.address,
//             city: business.location.city,
//             state: business.location.state,
//             zipCode: business.location.zip_code,
//             category: business.categories[0].title,
//             rating: business.rating,
//             reviewCount: business.review_count,
//           }));
//         }
//       }
//     );
// }

const Yelp = {
  search(term, location, sortBy) {
    return (
      fetch(
        `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          method: "GET",
          // headers dotor API KEY ee tawij ugdug buyu nemelt tohirgoonuudaa tawij ugdug
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        // .then ирсэн утгыг буцаана. promise n 3 функц дагуулаад явж байдаг. .then(), .catch(), .finally
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse?.businesses) {
            return jsonResponse.businesses.map((business) => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }));
          }
        })
    );
  },
};
// buh .then uudee heregjuulj duusaad /.then utga uurchilj bgaa/ duusaad suuliin utgaa search ruugee butsaaj bna
export default Yelp;


// ? ni if utgiin towchlol bnoo

// const myPostRequest = ({ body }) => {
//   const response = fetch(`https://www.exampleapi.com/mypostendoint`, {
//     method: "POST",
//     body: JSON.stringify(body), // body uuruu string type
//   });

//   if (!response.ok) {
//     return "network aldaa";
//   }

//   return response.json();
// };

// const onClickPost = () => {
//   const body = {
//     name: "uka",
//     husband: true,
//   };

//   const data = myPostRequest({
//     body,
//   });

//   setMYdata(data);
// };

// const myDeleteRequest = ({ id }) => {
//   const response = fetch(`https://www.exampleapi.com/mypostendoint?id=${id}`, {
//     method: "DELETE",
//   });

//   if (!response.ok) {
//     return "network aldaa";
//   }

//   return response.json();
// };

// const onClickDelete = () => {
//   const id = 2;

//   const data = myDeleteRequest({
//     id,
//   });

//   const newData = mydata.filter((item) => item.id !== id);
//   setMYdata(newData);
// };

// const myPutRequest = ({ body }) => {
//   const response = fetch(`https://www.exampleapi.com/mypostendoint`, {
//     method: "PUT",
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     return "network aldaa";
//   }

//   return response.json();
// };

// const myOnClickPut = () => {
//   const body = {
//     id: 1,
//     name: "uka new",
//     // husband: true
//   };

//   const data = myPutRequest({
//     body,
//   });

//   const newData = [...mydata, data];
//   // const newData = mydata.push(data)

//   setMYdata(newData);
// };
