export async function uploadImage(file: File) {
    const formData = new FormData();
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    formData.append('file', file);
    formData.append(
        'upload_preset',
        uploadPreset
    );

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData,
        }
    );

    const data = await response.json();

    console.log("Cloudinary response:", data);

    if (!response.ok) {
        throw new Error(data.error?.message || "Erro no upload");
    }

    return data.secure_url;
}