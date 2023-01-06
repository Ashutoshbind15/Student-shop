import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  urls: {
    type: [String],
  },
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Provider =
  mongoose.models.Provider || mongoose.model("Provider", ProviderSchema);

export default Provider;
