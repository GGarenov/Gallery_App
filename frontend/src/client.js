
  export async function createPhoto(formData) {
    const res = await fetch("/api/photo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        
      }),
    });
    const data = await res.json();
    return data;
  }

  export async function updatePhoto(params, formData) {
    const res = await fetch(`/api/photo/update/${params.photoId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
    const data = await res.json();
    return data;
  }
  
  export async function getPhotos(params) {
    const res = await fetch(`/api/photo/get?${params}&limit=4`);
    const data = await res.json();
    return data;
  }
  
  export async function getPhotoById(params) {
    const res = await fetch(`/api/photo/get/${params.photoId}`);
    const data = await res.json();
    return data;
  }
  
  
  export async function deletePhoto(photoId) {
    const res = await fetch(`/api/photo/delete/${photoId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  }
  
  export async function searchPhotos(searchQuery) {
    const res = await fetch(`/api/photo/get?${searchQuery}`);
    const data = await res.json();
    return data;
  }
  
  export async function getSearchPhotos(searchQuery) {
    const res = await fetch(`/api/photo/get?${searchQuery}`);
    const data = await res.json();
    return data;
  }
  
  
  
