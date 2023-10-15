export default function HomePage({ data }) {
  return (
    <div className='app'>
      <h1>HomePage</h1>
    </div>
  )
};

// export async function getStaticProps(context) {
//   const url = 'https://boogle.onrender.com/api/posts/recommend?page=1&size=3';

//   try {
//     // Fetch your data here
//     const response = await axios.get(url);
//     const responseData = response.data; // Extract the data from the response

//     // Return the data as props
//     return {
//       props: {
//         data: responseData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     // Handle the error gracefully, e.g., display a message to the user
//     return {
//       props: {
//         data: null, // You can set data to null or handle it as needed
//       },
//     };
//   }
// }
