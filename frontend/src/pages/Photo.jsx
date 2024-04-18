import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPhotoById, deletePhoto } from "../client";

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();

  const handlePhotoDelete = async (photoId) => {
    try {
      const data = await deletePhoto(photoId);
      if (data.success === false) {
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setLoading(true);
        const data = await getPhotoById({ photoId: params.photoId });

        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setPhoto(data);

        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPhoto();
  }, [params.photoId]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {photo && !loading && !error && (
        <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
          <p className="text-2xl font-bold">{photo.name}</p>
          <img src={photo.imageUrls[0]} alt={photo.name} />
          <p className="text-slate-800">
            <span className="font-semibold text-black">Description - </span>
            {photo.description}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePhotoDelete(photo._id)}
              className="text-red-700 uppercase border border-red-700 px-4 py-2"
            >
              Delete
            </button>
            <Link to={`/update-photo/${photo._id}`}>
              <button className="text-green-700 uppercase border border-green-700 px-4 py-2">
                Edit
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
