import { useEffect, useState } from "react";
import PhotoItem from "../components/PhotoItem";
import { getSearchPhotos } from "../client";

export default function AllPhotos() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const data = await getSearchPhotos();
      setPhotos(data);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
        All Photos:
      </h1>
      <div className="p-7 flex flex-wrap gap-4">
        {loading && (
          <p className="text-xl text-slate-700 text-center w-full">
            Loading...
          </p>
        )}

        {!loading &&
          photos &&
          photos.map((photo) => <PhotoItem key={photo._id} photo={photo} />)}
      </div>
    </div>
  );
}
