import mongoose from "mongoose"

const issueSchema = new mongoose.Schema(
  {
    issueKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    type: {
      type: String,
      enum: ["Task", "Bug", "Feature"],
      default: "Task"
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium"
    },

    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do"
    },

    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },

    labels: [
      {
        type: String,
        trim: true
      }
    ],

    dueDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Issue = mongoose.model("Issue", issueSchema)
export default Issue