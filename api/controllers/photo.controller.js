import Photo from "../models/photos.model.js";

export const createPhoto = async (req, res, next) => {
  try {
    const photo = await Photo.create(req.body);
    return res.status(201).json(photo);
  } catch (error) {
    next(error);
  }
};

export const getPhoto = async (req, res, next) => {
  try {
    const photo = await Photo.findById(req.params.id);
    console.log(photo);
    if (!photo) {
      return next(errorHandler(404, "Photo not found!"));
    }
    res.status(200).json(photo);
  } catch (error) {
    next(error);
  }
};

export const deletePhoto = async (req, res, next) => {
  const photo = await Photo.findById(req.params.id);

  if (!photo) {
    return next(errorHandler(404, "Photo not found!"));
  }

  try {
    await Photo.findByIdAndDelete(req.params.id);
    res.status(200).json("Photo has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updatePhoto = async (req, res, next) => {
  const photo = await Photo.findById(req.params.id);
  if (!photo) {
    return next(errorHandler(404, "Photo not found!"));
  }

  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPhoto);
  } catch (error) {
    next(error);
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
    next(error);
  }
};
