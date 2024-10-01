import { Router } from 'express';
import {
  addVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  getVideosByCategory,
} from '../controllers/videoController';

const router = Router();

// Route for uploading videos
router.post('/', addVideo);

// Route for getting all videos
router.get('/', getVideos);

// Route for fetching a single video by ID
router.get('/:id', getVideoById);

// Routes for fetching videos by category
router.get('/category/:categoryId', getVideosByCategory);

// Route for updating a video
router.put('/:id', updateVideo);

// Route for deleting a video
router.delete('/:id', deleteVideo);

export default router;
