import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            req: true,
        },
        thumbnail: {
            type: String,
            req: true
        },
        title: {
            type: String,
            req: true
        },
        description: {
            type: String,
            req: true
        },
        duration: {
            type: Number, //we get duartion from cloudinary -- it stores info like duration along with the url of the videos
            req: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User "
        }
    },
{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)