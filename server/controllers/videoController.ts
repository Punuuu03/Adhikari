// import { Request, Response } from 'express';
// import Video from '../models/Video';
// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// // Cloudinary configuration
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const addVideo = async (req: Request, res: Response) => {
//   try {
//     const { name, videoUrl, description, price, category } = req.body;

//     const newVideo = new Video({
//       name,
//       videoUrl,
//       description,
//       price,
//       category,
//     });

//     await newVideo.save();
//     res.status(201).json({ message: 'Video added successfully!' });
//   } catch (error) {
//     console.error('Error adding video:', error);
//     res.status(500).json({ message: 'Failed to add video.' });
//   }
// };


import { Request, Response } from 'express';
import Video from '../models/Video';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Add a video
export const addVideo = async (req: Request, res: Response) => {
  try {
    const { name, videoUrl, description, price, category } = req.body;

    const newVideo = new Video({
      name,
      videoUrl,
      description,
      price,
      category,
    });

    await newVideo.save();
    res.status(201).json({ message: 'Video added successfully!' });
  } catch (error) {
    console.error('Error adding video:', error);
    res.status(500).json({ message: 'Failed to add video.' });
  }
};

// Get videos by category
export const getVideosByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const videos = await Video.find({ category: categoryId }).populate('category');
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos by category', error });
  }
};

// Other methods (getVideoById, updateVideo, deleteVideo) remain unchanged


// Get all videos
export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find().populate('category');  // Populate category details
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: 'Error fetching videos', error });
  }
};

// Get a video by ID
export const getVideoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const video = await Video.findById(id).populate('category');
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error) {
    console.error("Error fetching video:", error);
    res.status(500).json({ message: 'Error fetching video', error });
  }
};

// Update a video
export const updateVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, category, videoUrl } = req.body;

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      id,
      {
        name,
        videoUrl,
        description,
        price,
        category: category["$oid"],
      },
      { new: true } // Return the updated document
    );

    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(updatedVideo);
  } catch (error) {
    console.error("Error updating video:", error);
    res.status(500).json({ message: 'Error updating video', error });
  }
};

// Delete a video
export const deleteVideo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedVideo = await Video.findByIdAndDelete(id);

    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Optionally, delete the video from Cloudinary if needed
    // const publicId = extractPublicIdFromUrl(deletedVideo.videoUrl); // Extract the Cloudinary public ID
    // await cloudinary.v2.uploader.destroy(publicId, { resource_type: 'video' });

    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error("Error deleting video:", error);
    res.status(500).json({ message: 'Error deleting video', error });
  }
};

// Helper function to extract Cloudinary public ID from the video URL (optional, for delete)
const extractPublicIdFromUrl = (url: string) => {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.split('.')[0]; // Extract the part before the file extension
};


// export const getVideosByCategory = async (req: Request, res: Response) => {
//   const categoryId = req.params.categoryId;

//   try {
//     const videos = await Video.find({ category: categoryId }).populate('category');
//     res.json(videos);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching videos by category' });
//   }
// };

// Assuming the IDs for categories are as follows:
// const CATEGORY_IDS = {
//   '66f50eb952657bc7e25ee9b7': 'upscId', // Replace with actual ObjectId for UPSC
//   '66f53cb5fef0333b186ca0a5': 'mpscId', // Replace with actual ObjectId for MPSC
//   SSC: 'sscId',   // Replace with actual ObjectId for SSC
// };

// export const getVideosByCategory = async (req: Request, res: Response) => {
//   const { categoryId } = req.params;

//   try {
//     const videos = await Video.find({ category: categoryId }).populate('category');
//     res.status(200).json(videos);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching videos', error });
//   }
// };
