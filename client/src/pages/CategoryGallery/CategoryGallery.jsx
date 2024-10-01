// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const CategoryGallery = () => {
//   const { categoryId } = useParams(); // Removed TypeScript type annotation
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/videos/categorygallery/${categoryId}`);
//         setVideos(response.data);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, [categoryId]);

//   return (
//     <div className="video-gallery">
//       <h2>Videos</h2>
//       <div className="gallery-grid">
//         {videos.map((video) => (
//           <div className="video-card" key={video._id}>
//             <h3>{video.name}</h3>
//             <video width="300" controls>
//               <source src={video.videoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <p>{video.description}</p>
//             <p>Price: ${video.price}</p>
//             <button className="enroll-button">Enroll</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryGallery;
