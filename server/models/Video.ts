import mongoose, { Document, Schema } from 'mongoose';

interface IVideo extends Document {
  name: string;
  videoUrl: string;
  description: string;
  price: number;
  category: mongoose.Types.ObjectId; // Use ObjectId type for category
}

const videoSchema: Schema = new Schema({
  name: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Types.ObjectId, ref: 'Category', required: true },
});

const Video = mongoose.model<IVideo>('Video', videoSchema);
export default Video;
