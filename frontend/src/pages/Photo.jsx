import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

import { getPhotoById } from "../client";
import "react-image-gallery/styles/css/image-gallery.css";
import { deletePhoto } from "../client";

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();

  const handlePhotoDelete = async (photoId) => {
    try {
      const data = await deletePhoto(photoId);
      if (data.success === false) {
        console.log(data.message);
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
        <div>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer"></div>

          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-bold">
              {photo.name} <br />
            </p>

            <ImageGallery
              items={photo.imageUrls.map((url) => ({
                original: url,
                thumbnail: url,
                renderThumbInner: (item) => (
                  <div>
                    <img
                      src={item.thumbnail}
                      alt={item.thumbnailAlt}
                      title={item.thumbnailTitle}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    {item.thumbnailLabel && (
                      <div className="image-gallery-thumbnail-label">
                        {item.thumbnailLabel}
                      </div>
                    )}
                  </div>
                ),
              }))}
            />

            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {photo.description}
            </p>

            <div className="flex flex-col item-center">
              <button
                onClick={() => handlePhotoDelete(photo._id)}
                className="text-red-700 uppercase"
              >
                Delete
              </button>
              <Link to={`/update-photo/${photo._id}`}>
                <button className="text-green-700 uppercase">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
