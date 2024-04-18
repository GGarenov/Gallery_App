import Photo from "../models/photos.model.js";

export const createPhoto = async (req, res, next) => {
  try {
    const photo = await Photo.create(req.body);
    return res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPhoto = async (req, res, next) => {
  try {
    const photo = await Photo.findById(req.params.id);

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" });
    }
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePhoto = async (req, res, next) => {
  try {
    const photo = await Photo.findById(req.params.id);

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" });
    }

    await Photo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Photo has been deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePhoto = async (req, res, next) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" });
    }

    const updatedPhoto = await Photo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPhotos = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const photos = await Photo.find({
      name: { $regex: searchTerm, $options: "i" },
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
