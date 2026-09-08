import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
  {
    name: { type: String,required: true,trim: true },
    key: { type: String,required: true,
      unique: true, uppercase: true,
      trim: true, minlength: 2,  maxlength: 10  },
    description: { type: String, trim: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",required: true  },
    members: [
      { type: mongoose.Schema.Types.ObjectId,ref: "User"  }
    ],
    startDate: {  type: Date },
    endDate: {type: Date},

    status: { type: String,
      enum: ["Active", "Completed", "Archived"], default: "Active"}
  },
  {    timestamps: true }
);

const Project = mongoose.model("Project", projectSchema)
export default Project